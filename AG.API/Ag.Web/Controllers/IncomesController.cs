﻿using Ag.BusinessLogic.Interfaces;
using Ag.BusinessLogic.Models;
using Ag.Common.Dtos.Request;
using Ag.Web.Filters;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Ag.Web.Controllers
{
    [Authorize]
    [Route("api/users/{userId}/[controller]")]
    [ServiceFilter(typeof(ActionLogFilterAttribute))]
    [ApiController]
    public class IncomesController : ControllerBase
    {
        private readonly IIncomeService _incomeService;

        public IncomesController(IIncomeService incomeService)
        {
            _incomeService = incomeService;
        }

        [HttpGet]
        public IActionResult GetIncomes([FromQuery] IncomeListFilterParams filterParams)
        {
            //TODO add validation, filterparams MUST contain userid, and userid must be equal to logged in user

            var incomeEntries = _incomeService.GetIncomeEntries(filterParams);
            return Ok(incomeEntries);
        }

        [HttpGet("~/api/incomes")]
        [Authorize("Admin")]
        public IActionResult GetAllIncomes([FromQuery] IncomeListFilterParams filterParams)
        {
            var incomeEntries = _incomeService.GetIncomeEntries(filterParams);
            return Ok(incomeEntries);
        }

        [HttpGet("{incomeId}")]
        [Authorize(Roles = "Operator, Admin")]
        public IActionResult GetIncome(int userId, long incomeId)
        {
            // TODO userid is only good for validation, if the requesting user is not an admin, id must match with the logged in user id
            var incomeEntry = _incomeService.GetIncomeEntry(incomeId);

            return Ok(incomeEntry);
        }

        [HttpPost]
        [Authorize("Operator")]
        public IActionResult AddIncome(int userId, IncomeEntryAddDto incomeEntryDto)
        {
            var addedIncomeEntry = _incomeService.AddIncomEntry(userId, incomeEntryDto);
            return Ok(addedIncomeEntry);
        }

        [HttpPut("{incomeId}")]
        [Authorize(Roles = "Operator, Admin")]
        public IActionResult UpdateIncome(int userId, long incomeId, IncomeEntryUpdateDto incomeEntryDto)
        {
            // TODO userid is only good for validation, if the requesting user is not an admin, id must match with the logged in user id

            bool isAdmin = User.IsInRole("Admin");

            if (!isAdmin)
            {
                _incomeService.ValidateAuthorityToUpdateIncome(userId, incomeId);
            }

            var incomeEntry = _incomeService.UpdateIncomeEntry(incomeId, incomeEntryDto);

            return Ok(incomeEntry);
        }

        [HttpPut("{incomeId}/lock")]
        [Authorize("Admin")]
        public IActionResult LockIncome(int userId, long incomeId)
        {
            bool result = _incomeService.UpdateIncomeEntryLockedState(incomeId, true);

            return Ok(result);
        }

        [HttpPut("{incomeId}/unlock")]
        [Authorize("Admin")]
        public IActionResult UnlockIncome(int userId, long incomeId)
        {
            bool result = _incomeService.UpdateIncomeEntryLockedState(incomeId, false);

            return Ok(result);
        }
    }
}