﻿using Ag.BusinessLogic.Exceptions;
using Ag.BusinessLogic.Interfaces;
using Ag.Common.Enums;
using Ag.Domain;
using Ag.Domain.Models;
using Microsoft.Extensions.Logging;
using System.Linq;

namespace Ag.BusinessLogic.Services
{
    public class UserService : IUserService
    {
        private readonly AgDbContext _context;
        private readonly ILogger<UserService> _logger;

        public UserService(AgDbContext context, ILogger<UserService> logger)
        {
            _context = context;
            _logger = logger;
        }

        public void AddPerformer(int operatorId, int performerId)
        {
            if (operatorId == performerId) throw new AgUnfulfillableActionException("Can not add relation to self.");

            if (_context.UserRelations.SingleOrDefault(r => (r.FromId == operatorId && r.ToId == performerId) || (r.FromId == performerId && r.ToId == operatorId)) != null) throw new AgUnfulfillableActionException("Model is already assigned to Operator");

            _logger.LogInformation($"Assigning a model to operator. Operator ID: {operatorId}, Model ID: {performerId}");

            var op = _context.Users.SingleOrDefault(u => u.Id == operatorId && u.Role == Role.Operator);

            if (op == null) throw new AgUnfulfillableActionException($"Operator with ID: {operatorId} does not exist.");

            var performer = _context.Users.SingleOrDefault(u => u.Id == performerId && u.Role == Role.Performer);

            if (performer == null) throw new AgUnfulfillableActionException($"Model with ID: {performerId} does not exist.");

            UserRelation relation = new UserRelation
            {
                FromId = operatorId,
                ToId = performerId,
                UserFrom = op,
                UserTo = performer
            };

            _context.UserRelations.Add(relation);

            // HUGE TODO HERE, consider what the hell will happen with these? performers shouldnt even be assigned sites, they are fine on their own, but shift... op must have more shifts, each assigned to a performer, so the relation should contain shift?!
            performer.Shift = op.Shift; //placeholders for now
            performer.Sites = op.Sites; //placeholders for now

            _context.SaveChanges();

            _logger.LogInformation($"Successfully assigned Model with ID: {performerId} to Operator with ID: {operatorId}.");
        }
    }
}
