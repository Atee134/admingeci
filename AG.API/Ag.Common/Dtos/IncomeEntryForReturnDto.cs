﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Ag.Common.Dtos
{
    public class IncomeEntryForReturnDto
    {
        public string SiteName { get; set; } // TODO should this be another entity?
        public double IncomeInDollars { get; set; }
        public DateTime WorkDay { get; set; }
    }
}
