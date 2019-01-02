﻿using Ag.BusinessLogic.Exceptions;
using Ag.BusinessLogic.Interfaces;
using Ag.Common.Dtos;
using Ag.Common.Dtos.Request;
using Ag.Common.Dtos.Response;
using Ag.Common.Enums;
using Ag.Domain;
using Ag.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ag.BusinessLogic.Services
{
    public class IncomeService : IIncomeService
    {
        private readonly AgDbContext _context;
        private readonly ILogger<IncomeService> _logger;

        public IncomeService(AgDbContext context, ILogger<IncomeService> logger)
        {
            _context = context;
            _logger = logger;
        }

        public IncomeEntryForReturnDto AddIncomEntry(int userId, IncomeEntryAddDto incomeEntryDto)
        {
            _logger.LogInformation($"Adding income for user with ID: {userId}");

            var op = _context.Users.Include(u => u.Colleague).FirstOrDefault(u => u.Id == userId);

            if (op.Role != Role.Operator)
            {
                throw new AgUnfulfillableActionException("User is not an operator.");
            }

            if (op.Colleague == null)
            {
                throw new AgUnfulfillableActionException("User does not have a performer assigned.");
            }

            List<IncomeChunk> incomeChunks = new List<IncomeChunk>();

            foreach (var incomeChunkDto in incomeEntryDto.IncomeChunks)
            {
                incomeChunks.Add(CreateIncomeChunkFromDto(incomeChunkDto, op.MinPercent, op.Colleague.MinPercent)); // TODO add logic for currentPercent to not use always minimum
            }

            var incomeEntry = new IncomeEntry()
            {
                Date = incomeEntryDto.Date,
                Operator = op,
                Performer = op.Colleague,
                IncomeChunks = incomeChunks,
                TotalSum = incomeChunks.Sum(i => i.Sum),
                TotalIncomeForOwner = incomeChunks.Sum(i => i.IncomeForOwner),
                TotalIncomeForOperator = incomeChunks.Sum(i => i.IncomeForOperator),
                TotalIncomeForPerformer = incomeChunks.Sum(i => i.IncomeForPerformer)
            };

            _context.IncomeEntries.Add(incomeEntry);
            _context.SaveChanges();

            _logger.LogInformation($"Income successfully added to user with ID: {userId}, income ID: {incomeEntry.Id}");

            return ConvertIncomeEntryForReturnDto(incomeEntry);
        }

        public List<IncomeEntryForReturnDto> GetIncomeEntries(int? userId = null) // TODO later there will be a filter with ID as param passed in
        {
            _logger.LogInformation($"Getting income entries of user with ID: {userId}");

            List<IncomeEntryForReturnDto> incomeEntriesToReturn = new List<IncomeEntryForReturnDto>();

            IOrderedQueryable<IncomeEntry> incomeEntries; 

            if (userId != null)
            {
                incomeEntries = _context.IncomeEntries
                .Include(i => i.IncomeChunks)
                .Include(i => i.Operator)
                .Include(i => i.Performer)
                .Where(i => i.Operator.Id == userId || i.Performer.Id == userId)
                .OrderByDescending(i => i.Date);
            }
            else
            {
                incomeEntries = _context.IncomeEntries
                 .Include(i => i.IncomeChunks)
                 .Include(i => i.Operator)
                 .Include(i => i.Performer)
                 .OrderByDescending(i => i.Date);
            }

            foreach (var entry in incomeEntries)
            {
                incomeEntriesToReturn.Add(ConvertIncomeEntryForReturnDto(entry));
            }

            return incomeEntriesToReturn;
        }

        private IncomeChunk CreateIncomeChunkFromDto(IncomeChunkAddDto incomeChunkDto, double operatorPercent, double performerPercent)
        {
            double incomeForOperator = incomeChunkDto.Income * operatorPercent;
            double incomeForPerformer = incomeChunkDto.Income * performerPercent;
            double incomeForOwner = incomeChunkDto.Income - (incomeForOperator + incomeForPerformer);

            return new IncomeChunk()
            {
                Site = incomeChunkDto.Site,
                Sum = incomeChunkDto.Income,
                IncomeForOwner = incomeForOwner,
                IncomeForOperator = incomeForOperator,
                IncomeForPerformer = incomeForPerformer,
            };
        }

        private IncomeEntryForReturnDto ConvertIncomeEntryForReturnDto(IncomeEntry incomeEntry)
        {
            return new IncomeEntryForReturnDto()
            {
                Id = incomeEntry.Id,
                Date = incomeEntry.Date,
                OperatorName = incomeEntry.Operator.UserName,
                PerformerName = incomeEntry.Performer.UserName,
                TotalSum = incomeEntry.TotalSum,
                TotalIncomeForOwner = incomeEntry.TotalIncomeForOwner,
                TotalIncomeForOperator = incomeEntry.TotalIncomeForOperator,
                TotalIncomeForPerformer = incomeEntry.TotalIncomeForPerformer,
                IncomeChunks = GetIncomeChunks(incomeEntry)
            };
        }

        private List<IncomeChunkForReturnDto> GetIncomeChunks(IncomeEntry entry)
        {
            List<IncomeChunkForReturnDto> incomeChunksForReturn = new List<IncomeChunkForReturnDto>();

            foreach (var chunk in entry.IncomeChunks)
            {
                IncomeChunkForReturnDto incomeChunkDto = new IncomeChunkForReturnDto()
                {
                    Id = chunk.Id,
                    Site = chunk.Site,
                    Sum = chunk.Sum,
                    IncomeForOwner = chunk.IncomeForOwner,
                    IncomeForOperator = chunk.IncomeForOperator,
                    IncomeForPerformer = chunk.IncomeForPerformer
                };

                incomeChunksForReturn.Add(incomeChunkDto);
            }

            return incomeChunksForReturn;
        }
    }
}
