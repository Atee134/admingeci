﻿/* tslint:disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v12.0.12.0 (NJsonSchema v9.13.15.0 (Newtonsoft.Json v11.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming



export class IncomeChunkAddDto implements IIncomeChunkAddDto {
    site!: Site;
    income!: number;

    constructor(data?: IIncomeChunkAddDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.site = data["Site"] !== undefined ? data["Site"] : <any>null;
            this.income = data["Income"] !== undefined ? data["Income"] : <any>null;
        }
    }

    static fromJS(data: any): IncomeChunkAddDto {
        data = typeof data === 'object' ? data : {};
        let result = new IncomeChunkAddDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Site"] = this.site !== undefined ? this.site : <any>null;
        data["Income"] = this.income !== undefined ? this.income : <any>null;
        return data; 
    }

    clone(): IncomeChunkAddDto {
        const json = this.toJSON();
        let result = new IncomeChunkAddDto();
        result.init(json);
        return result;
    }
}

export interface IIncomeChunkAddDto {
    site: Site;
    income: number;
}

export enum Site {
    LJ = "LJ", 
    CB = "CB", 
    MFC = "MFC", 
}

export class IncomeChunkUpdateDto implements IIncomeChunkUpdateDto {
    id?: number | null;
    site!: Site;
    income!: number;

    constructor(data?: IIncomeChunkUpdateDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.id = data["Id"] !== undefined ? data["Id"] : <any>null;
            this.site = data["Site"] !== undefined ? data["Site"] : <any>null;
            this.income = data["Income"] !== undefined ? data["Income"] : <any>null;
        }
    }

    static fromJS(data: any): IncomeChunkUpdateDto {
        data = typeof data === 'object' ? data : {};
        let result = new IncomeChunkUpdateDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Id"] = this.id !== undefined ? this.id : <any>null;
        data["Site"] = this.site !== undefined ? this.site : <any>null;
        data["Income"] = this.income !== undefined ? this.income : <any>null;
        return data; 
    }

    clone(): IncomeChunkUpdateDto {
        const json = this.toJSON();
        let result = new IncomeChunkUpdateDto();
        result.init(json);
        return result;
    }
}

export interface IIncomeChunkUpdateDto {
    id?: number | null;
    site: Site;
    income: number;
}

export class IncomeEntryAddDto implements IIncomeEntryAddDto {
    date!: Date;
    incomeChunks!: IncomeChunkAddDto[];
    performerId?: number | null;

    constructor(data?: IIncomeEntryAddDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
        if (!data) {
            this.incomeChunks = [];
        }
    }

    init(data?: any) {
        if (data) {
            this.date = data["Date"] ? new Date(data["Date"].toString()) : <any>null;
            if (data["IncomeChunks"] && data["IncomeChunks"].constructor === Array) {
                this.incomeChunks = [] as any;
                for (let item of data["IncomeChunks"])
                    this.incomeChunks!.push(IncomeChunkAddDto.fromJS(item));
            }
            this.performerId = data["PerformerId"] !== undefined ? data["PerformerId"] : <any>null;
        }
    }

    static fromJS(data: any): IncomeEntryAddDto {
        data = typeof data === 'object' ? data : {};
        let result = new IncomeEntryAddDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Date"] = this.date ? this.date.toISOString() : <any>null;
        if (this.incomeChunks && this.incomeChunks.constructor === Array) {
            data["IncomeChunks"] = [];
            for (let item of this.incomeChunks)
                data["IncomeChunks"].push(item.toJSON());
        }
        data["PerformerId"] = this.performerId !== undefined ? this.performerId : <any>null;
        return data; 
    }

    clone(): IncomeEntryAddDto {
        const json = this.toJSON();
        let result = new IncomeEntryAddDto();
        result.init(json);
        return result;
    }
}

export interface IIncomeEntryAddDto {
    date: Date;
    incomeChunks: IncomeChunkAddDto[];
    performerId?: number | null;
}

export class IncomeEntryUpdateDto implements IIncomeEntryUpdateDto {
    date?: Date | null;
    incomeChunks?: IncomeChunkUpdateDto[] | null;
    performerId?: number | null;

    constructor(data?: IIncomeEntryUpdateDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.date = data["Date"] ? new Date(data["Date"].toString()) : <any>null;
            if (data["IncomeChunks"] && data["IncomeChunks"].constructor === Array) {
                this.incomeChunks = [] as any;
                for (let item of data["IncomeChunks"])
                    this.incomeChunks!.push(IncomeChunkUpdateDto.fromJS(item));
            }
            this.performerId = data["PerformerId"] !== undefined ? data["PerformerId"] : <any>null;
        }
    }

    static fromJS(data: any): IncomeEntryUpdateDto {
        data = typeof data === 'object' ? data : {};
        let result = new IncomeEntryUpdateDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Date"] = this.date ? this.date.toISOString() : <any>null;
        if (this.incomeChunks && this.incomeChunks.constructor === Array) {
            data["IncomeChunks"] = [];
            for (let item of this.incomeChunks)
                data["IncomeChunks"].push(item.toJSON());
        }
        data["PerformerId"] = this.performerId !== undefined ? this.performerId : <any>null;
        return data; 
    }

    clone(): IncomeEntryUpdateDto {
        const json = this.toJSON();
        let result = new IncomeEntryUpdateDto();
        result.init(json);
        return result;
    }
}

export interface IIncomeEntryUpdateDto {
    date?: Date | null;
    incomeChunks?: IncomeChunkUpdateDto[] | null;
    performerId?: number | null;
}

export class UserForEditDto implements IUserForEditDto {
    id!: number;
    userName!: string;
    password?: string | null;
    color!: string;
    sites!: Site[];
    minPercent!: number;
    maxPercent!: number;

    constructor(data?: IUserForEditDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
        if (!data) {
            this.sites = [];
        }
    }

    init(data?: any) {
        if (data) {
            this.id = data["Id"] !== undefined ? data["Id"] : <any>null;
            this.userName = data["UserName"] !== undefined ? data["UserName"] : <any>null;
            this.password = data["Password"] !== undefined ? data["Password"] : <any>null;
            this.color = data["Color"] !== undefined ? data["Color"] : <any>null;
            if (data["Sites"] && data["Sites"].constructor === Array) {
                this.sites = [] as any;
                for (let item of data["Sites"])
                    this.sites!.push(item);
            }
            this.minPercent = data["MinPercent"] !== undefined ? data["MinPercent"] : <any>null;
            this.maxPercent = data["MaxPercent"] !== undefined ? data["MaxPercent"] : <any>null;
        }
    }

    static fromJS(data: any): UserForEditDto {
        data = typeof data === 'object' ? data : {};
        let result = new UserForEditDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Id"] = this.id !== undefined ? this.id : <any>null;
        data["UserName"] = this.userName !== undefined ? this.userName : <any>null;
        data["Password"] = this.password !== undefined ? this.password : <any>null;
        data["Color"] = this.color !== undefined ? this.color : <any>null;
        if (this.sites && this.sites.constructor === Array) {
            data["Sites"] = [];
            for (let item of this.sites)
                data["Sites"].push(item);
        }
        data["MinPercent"] = this.minPercent !== undefined ? this.minPercent : <any>null;
        data["MaxPercent"] = this.maxPercent !== undefined ? this.maxPercent : <any>null;
        return data; 
    }

    clone(): UserForEditDto {
        const json = this.toJSON();
        let result = new UserForEditDto();
        result.init(json);
        return result;
    }
}

export interface IUserForEditDto {
    id: number;
    userName: string;
    password?: string | null;
    color: string;
    sites: Site[];
    minPercent: number;
    maxPercent: number;
}

export class UserForLoginDto implements IUserForLoginDto {
    userName!: string;
    password!: string;

    constructor(data?: IUserForLoginDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.userName = data["UserName"] !== undefined ? data["UserName"] : <any>null;
            this.password = data["Password"] !== undefined ? data["Password"] : <any>null;
        }
    }

    static fromJS(data: any): UserForLoginDto {
        data = typeof data === 'object' ? data : {};
        let result = new UserForLoginDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["UserName"] = this.userName !== undefined ? this.userName : <any>null;
        data["Password"] = this.password !== undefined ? this.password : <any>null;
        return data; 
    }

    clone(): UserForLoginDto {
        const json = this.toJSON();
        let result = new UserForLoginDto();
        result.init(json);
        return result;
    }
}

export interface IUserForLoginDto {
    userName: string;
    password: string;
}

export class UserForRegisterDto implements IUserForRegisterDto {
    userName!: string;
    password!: string;
    role!: Role;

    constructor(data?: IUserForRegisterDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.userName = data["UserName"] !== undefined ? data["UserName"] : <any>null;
            this.password = data["Password"] !== undefined ? data["Password"] : <any>null;
            this.role = data["Role"] !== undefined ? data["Role"] : <any>null;
        }
    }

    static fromJS(data: any): UserForRegisterDto {
        data = typeof data === 'object' ? data : {};
        let result = new UserForRegisterDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["UserName"] = this.userName !== undefined ? this.userName : <any>null;
        data["Password"] = this.password !== undefined ? this.password : <any>null;
        data["Role"] = this.role !== undefined ? this.role : <any>null;
        return data; 
    }

    clone(): UserForRegisterDto {
        const json = this.toJSON();
        let result = new UserForRegisterDto();
        result.init(json);
        return result;
    }
}

export interface IUserForRegisterDto {
    userName: string;
    password: string;
    role: Role;
}

export enum Role {
    Operator = "Operator", 
    Performer = "Performer", 
    Admin = "Admin", 
}

export class IncomeChunkForReturnDto implements IIncomeChunkForReturnDto {
    id!: number;
    site!: Site;
    sum!: number;
    incomeForStudio!: number;
    incomeForOperator!: number;
    incomeForPerformer!: number;

    constructor(data?: IIncomeChunkForReturnDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.id = data["Id"] !== undefined ? data["Id"] : <any>null;
            this.site = data["Site"] !== undefined ? data["Site"] : <any>null;
            this.sum = data["Sum"] !== undefined ? data["Sum"] : <any>null;
            this.incomeForStudio = data["IncomeForStudio"] !== undefined ? data["IncomeForStudio"] : <any>null;
            this.incomeForOperator = data["IncomeForOperator"] !== undefined ? data["IncomeForOperator"] : <any>null;
            this.incomeForPerformer = data["IncomeForPerformer"] !== undefined ? data["IncomeForPerformer"] : <any>null;
        }
    }

    static fromJS(data: any): IncomeChunkForReturnDto {
        data = typeof data === 'object' ? data : {};
        let result = new IncomeChunkForReturnDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Id"] = this.id !== undefined ? this.id : <any>null;
        data["Site"] = this.site !== undefined ? this.site : <any>null;
        data["Sum"] = this.sum !== undefined ? this.sum : <any>null;
        data["IncomeForStudio"] = this.incomeForStudio !== undefined ? this.incomeForStudio : <any>null;
        data["IncomeForOperator"] = this.incomeForOperator !== undefined ? this.incomeForOperator : <any>null;
        data["IncomeForPerformer"] = this.incomeForPerformer !== undefined ? this.incomeForPerformer : <any>null;
        return data; 
    }

    clone(): IncomeChunkForReturnDto {
        const json = this.toJSON();
        let result = new IncomeChunkForReturnDto();
        result.init(json);
        return result;
    }
}

export interface IIncomeChunkForReturnDto {
    id: number;
    site: Site;
    sum: number;
    incomeForStudio: number;
    incomeForOperator: number;
    incomeForPerformer: number;
}

export class IncomeEntryForReturnDto implements IIncomeEntryForReturnDto {
    id!: number;
    date!: Date;
    color?: string | null;
    operatorId!: number;
    operatorName?: string | null;
    performerName?: string | null;
    performerId!: number;
    totalSum!: number;
    totalIncomeForStudio!: number;
    totalIncomeForOperator!: number;
    totalIncomeForPerformer!: number;
    incomeChunks?: IncomeChunkForReturnDto[] | null;

    constructor(data?: IIncomeEntryForReturnDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.id = data["Id"] !== undefined ? data["Id"] : <any>null;
            this.date = data["Date"] ? new Date(data["Date"].toString()) : <any>null;
            this.color = data["Color"] !== undefined ? data["Color"] : <any>null;
            this.operatorId = data["OperatorId"] !== undefined ? data["OperatorId"] : <any>null;
            this.operatorName = data["OperatorName"] !== undefined ? data["OperatorName"] : <any>null;
            this.performerName = data["PerformerName"] !== undefined ? data["PerformerName"] : <any>null;
            this.performerId = data["PerformerId"] !== undefined ? data["PerformerId"] : <any>null;
            this.totalSum = data["TotalSum"] !== undefined ? data["TotalSum"] : <any>null;
            this.totalIncomeForStudio = data["TotalIncomeForStudio"] !== undefined ? data["TotalIncomeForStudio"] : <any>null;
            this.totalIncomeForOperator = data["TotalIncomeForOperator"] !== undefined ? data["TotalIncomeForOperator"] : <any>null;
            this.totalIncomeForPerformer = data["TotalIncomeForPerformer"] !== undefined ? data["TotalIncomeForPerformer"] : <any>null;
            if (data["IncomeChunks"] && data["IncomeChunks"].constructor === Array) {
                this.incomeChunks = [] as any;
                for (let item of data["IncomeChunks"])
                    this.incomeChunks!.push(IncomeChunkForReturnDto.fromJS(item));
            }
        }
    }

    static fromJS(data: any): IncomeEntryForReturnDto {
        data = typeof data === 'object' ? data : {};
        let result = new IncomeEntryForReturnDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Id"] = this.id !== undefined ? this.id : <any>null;
        data["Date"] = this.date ? this.date.toISOString() : <any>null;
        data["Color"] = this.color !== undefined ? this.color : <any>null;
        data["OperatorId"] = this.operatorId !== undefined ? this.operatorId : <any>null;
        data["OperatorName"] = this.operatorName !== undefined ? this.operatorName : <any>null;
        data["PerformerName"] = this.performerName !== undefined ? this.performerName : <any>null;
        data["PerformerId"] = this.performerId !== undefined ? this.performerId : <any>null;
        data["TotalSum"] = this.totalSum !== undefined ? this.totalSum : <any>null;
        data["TotalIncomeForStudio"] = this.totalIncomeForStudio !== undefined ? this.totalIncomeForStudio : <any>null;
        data["TotalIncomeForOperator"] = this.totalIncomeForOperator !== undefined ? this.totalIncomeForOperator : <any>null;
        data["TotalIncomeForPerformer"] = this.totalIncomeForPerformer !== undefined ? this.totalIncomeForPerformer : <any>null;
        if (this.incomeChunks && this.incomeChunks.constructor === Array) {
            data["IncomeChunks"] = [];
            for (let item of this.incomeChunks)
                data["IncomeChunks"].push(item.toJSON());
        }
        return data; 
    }

    clone(): IncomeEntryForReturnDto {
        const json = this.toJSON();
        let result = new IncomeEntryForReturnDto();
        result.init(json);
        return result;
    }
}

export interface IIncomeEntryForReturnDto {
    id: number;
    date: Date;
    color?: string | null;
    operatorId: number;
    operatorName?: string | null;
    performerName?: string | null;
    performerId: number;
    totalSum: number;
    totalIncomeForStudio: number;
    totalIncomeForOperator: number;
    totalIncomeForPerformer: number;
    incomeChunks?: IncomeChunkForReturnDto[] | null;
}

export class IncomeListDataReturnDto implements IIncomeListDataReturnDto {
    operatorStatistics?: IncomeStatisticsDto | null;
    performerStatistics?: IncomeStatisticsDto | null;
    studioStatistics?: IncomeStatisticsDto | null;
    totalStatistics?: IncomeStatisticsDto | null;
    siteStatistics?: IncomeStatisticsSiteSumDto[] | null;
    incomeEntries?: IncomeEntryForReturnDto[] | null;

    constructor(data?: IIncomeListDataReturnDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.operatorStatistics = data["OperatorStatistics"] ? IncomeStatisticsDto.fromJS(data["OperatorStatistics"]) : <any>null;
            this.performerStatistics = data["PerformerStatistics"] ? IncomeStatisticsDto.fromJS(data["PerformerStatistics"]) : <any>null;
            this.studioStatistics = data["StudioStatistics"] ? IncomeStatisticsDto.fromJS(data["StudioStatistics"]) : <any>null;
            this.totalStatistics = data["TotalStatistics"] ? IncomeStatisticsDto.fromJS(data["TotalStatistics"]) : <any>null;
            if (data["SiteStatistics"] && data["SiteStatistics"].constructor === Array) {
                this.siteStatistics = [] as any;
                for (let item of data["SiteStatistics"])
                    this.siteStatistics!.push(IncomeStatisticsSiteSumDto.fromJS(item));
            }
            if (data["IncomeEntries"] && data["IncomeEntries"].constructor === Array) {
                this.incomeEntries = [] as any;
                for (let item of data["IncomeEntries"])
                    this.incomeEntries!.push(IncomeEntryForReturnDto.fromJS(item));
            }
        }
    }

    static fromJS(data: any): IncomeListDataReturnDto {
        data = typeof data === 'object' ? data : {};
        let result = new IncomeListDataReturnDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["OperatorStatistics"] = this.operatorStatistics ? this.operatorStatistics.toJSON() : <any>null;
        data["PerformerStatistics"] = this.performerStatistics ? this.performerStatistics.toJSON() : <any>null;
        data["StudioStatistics"] = this.studioStatistics ? this.studioStatistics.toJSON() : <any>null;
        data["TotalStatistics"] = this.totalStatistics ? this.totalStatistics.toJSON() : <any>null;
        if (this.siteStatistics && this.siteStatistics.constructor === Array) {
            data["SiteStatistics"] = [];
            for (let item of this.siteStatistics)
                data["SiteStatistics"].push(item.toJSON());
        }
        if (this.incomeEntries && this.incomeEntries.constructor === Array) {
            data["IncomeEntries"] = [];
            for (let item of this.incomeEntries)
                data["IncomeEntries"].push(item.toJSON());
        }
        return data; 
    }

    clone(): IncomeListDataReturnDto {
        const json = this.toJSON();
        let result = new IncomeListDataReturnDto();
        result.init(json);
        return result;
    }
}

export interface IIncomeListDataReturnDto {
    operatorStatistics?: IncomeStatisticsDto | null;
    performerStatistics?: IncomeStatisticsDto | null;
    studioStatistics?: IncomeStatisticsDto | null;
    totalStatistics?: IncomeStatisticsDto | null;
    siteStatistics?: IncomeStatisticsSiteSumDto[] | null;
    incomeEntries?: IncomeEntryForReturnDto[] | null;
}

export class IncomeStatisticsDto implements IIncomeStatisticsDto {
    average!: number;
    total!: number;

    constructor(data?: IIncomeStatisticsDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.average = data["Average"] !== undefined ? data["Average"] : <any>null;
            this.total = data["Total"] !== undefined ? data["Total"] : <any>null;
        }
    }

    static fromJS(data: any): IncomeStatisticsDto {
        data = typeof data === 'object' ? data : {};
        let result = new IncomeStatisticsDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Average"] = this.average !== undefined ? this.average : <any>null;
        data["Total"] = this.total !== undefined ? this.total : <any>null;
        return data; 
    }

    clone(): IncomeStatisticsDto {
        const json = this.toJSON();
        let result = new IncomeStatisticsDto();
        result.init(json);
        return result;
    }
}

export interface IIncomeStatisticsDto {
    average: number;
    total: number;
}

export class IncomeStatisticsSiteSumDto implements IIncomeStatisticsSiteSumDto {
    site!: Site;
    statistics?: IncomeStatisticsDto | null;

    constructor(data?: IIncomeStatisticsSiteSumDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.site = data["Site"] !== undefined ? data["Site"] : <any>null;
            this.statistics = data["Statistics"] ? IncomeStatisticsDto.fromJS(data["Statistics"]) : <any>null;
        }
    }

    static fromJS(data: any): IncomeStatisticsSiteSumDto {
        data = typeof data === 'object' ? data : {};
        let result = new IncomeStatisticsSiteSumDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Site"] = this.site !== undefined ? this.site : <any>null;
        data["Statistics"] = this.statistics ? this.statistics.toJSON() : <any>null;
        return data; 
    }

    clone(): IncomeStatisticsSiteSumDto {
        const json = this.toJSON();
        let result = new IncomeStatisticsSiteSumDto();
        result.init(json);
        return result;
    }
}

export interface IIncomeStatisticsSiteSumDto {
    site: Site;
    statistics?: IncomeStatisticsDto | null;
}

export class UserAuthResponseDto implements IUserAuthResponseDto {
    token?: string | null;
    user?: UserDetailDto | null;

    constructor(data?: IUserAuthResponseDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.token = data["Token"] !== undefined ? data["Token"] : <any>null;
            this.user = data["User"] ? UserDetailDto.fromJS(data["User"]) : <any>null;
        }
    }

    static fromJS(data: any): UserAuthResponseDto {
        data = typeof data === 'object' ? data : {};
        let result = new UserAuthResponseDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Token"] = this.token !== undefined ? this.token : <any>null;
        data["User"] = this.user ? this.user.toJSON() : <any>null;
        return data; 
    }

    clone(): UserAuthResponseDto {
        const json = this.toJSON();
        let result = new UserAuthResponseDto();
        result.init(json);
        return result;
    }
}

export interface IUserAuthResponseDto {
    token?: string | null;
    user?: UserDetailDto | null;
}

export class UserDetailDto implements IUserDetailDto {
    id!: number;
    userName?: string | null;
    shift!: Shift;
    role!: Role;
    color?: string | null;
    sites?: Site[] | null;
    colleagues?: UserForListDto[] | null;
    minPercent!: number;
    maxPercent!: number;

    constructor(data?: IUserDetailDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.id = data["Id"] !== undefined ? data["Id"] : <any>null;
            this.userName = data["UserName"] !== undefined ? data["UserName"] : <any>null;
            this.shift = data["Shift"] !== undefined ? data["Shift"] : <any>null;
            this.role = data["Role"] !== undefined ? data["Role"] : <any>null;
            this.color = data["Color"] !== undefined ? data["Color"] : <any>null;
            if (data["Sites"] && data["Sites"].constructor === Array) {
                this.sites = [] as any;
                for (let item of data["Sites"])
                    this.sites!.push(item);
            }
            if (data["Colleagues"] && data["Colleagues"].constructor === Array) {
                this.colleagues = [] as any;
                for (let item of data["Colleagues"])
                    this.colleagues!.push(UserForListDto.fromJS(item));
            }
            this.minPercent = data["MinPercent"] !== undefined ? data["MinPercent"] : <any>null;
            this.maxPercent = data["MaxPercent"] !== undefined ? data["MaxPercent"] : <any>null;
        }
    }

    static fromJS(data: any): UserDetailDto {
        data = typeof data === 'object' ? data : {};
        let result = new UserDetailDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Id"] = this.id !== undefined ? this.id : <any>null;
        data["UserName"] = this.userName !== undefined ? this.userName : <any>null;
        data["Shift"] = this.shift !== undefined ? this.shift : <any>null;
        data["Role"] = this.role !== undefined ? this.role : <any>null;
        data["Color"] = this.color !== undefined ? this.color : <any>null;
        if (this.sites && this.sites.constructor === Array) {
            data["Sites"] = [];
            for (let item of this.sites)
                data["Sites"].push(item);
        }
        if (this.colleagues && this.colleagues.constructor === Array) {
            data["Colleagues"] = [];
            for (let item of this.colleagues)
                data["Colleagues"].push(item.toJSON());
        }
        data["MinPercent"] = this.minPercent !== undefined ? this.minPercent : <any>null;
        data["MaxPercent"] = this.maxPercent !== undefined ? this.maxPercent : <any>null;
        return data; 
    }

    clone(): UserDetailDto {
        const json = this.toJSON();
        let result = new UserDetailDto();
        result.init(json);
        return result;
    }
}

export interface IUserDetailDto {
    id: number;
    userName?: string | null;
    shift: Shift;
    role: Role;
    color?: string | null;
    sites?: Site[] | null;
    colleagues?: UserForListDto[] | null;
    minPercent: number;
    maxPercent: number;
}

export enum Shift {
    Morning = "Morning", 
    Afternoon = "Afternoon", 
    Night = "Night", 
}

export class UserForListDto implements IUserForListDto {
    id!: number;
    userName?: string | null;
    shift!: Shift;
    role!: Role;
    color?: string | null;

    constructor(data?: IUserForListDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.id = data["Id"] !== undefined ? data["Id"] : <any>null;
            this.userName = data["UserName"] !== undefined ? data["UserName"] : <any>null;
            this.shift = data["Shift"] !== undefined ? data["Shift"] : <any>null;
            this.role = data["Role"] !== undefined ? data["Role"] : <any>null;
            this.color = data["Color"] !== undefined ? data["Color"] : <any>null;
        }
    }

    static fromJS(data: any): UserForListDto {
        data = typeof data === 'object' ? data : {};
        let result = new UserForListDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Id"] = this.id !== undefined ? this.id : <any>null;
        data["UserName"] = this.userName !== undefined ? this.userName : <any>null;
        data["Shift"] = this.shift !== undefined ? this.shift : <any>null;
        data["Role"] = this.role !== undefined ? this.role : <any>null;
        data["Color"] = this.color !== undefined ? this.color : <any>null;
        return data; 
    }

    clone(): UserForListDto {
        const json = this.toJSON();
        let result = new UserForListDto();
        result.init(json);
        return result;
    }
}

export interface IUserForListDto {
    id: number;
    userName?: string | null;
    shift: Shift;
    role: Role;
    color?: string | null;
}

export class WorkDayForListDto implements IWorkDayForListDto {
    date!: Date;
    workers?: UserForListDto[] | null;

    constructor(data?: IWorkDayForListDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.date = data["Date"] ? new Date(data["Date"].toString()) : <any>null;
            if (data["Workers"] && data["Workers"].constructor === Array) {
                this.workers = [] as any;
                for (let item of data["Workers"])
                    this.workers!.push(UserForListDto.fromJS(item));
            }
        }
    }

    static fromJS(data: any): WorkDayForListDto {
        data = typeof data === 'object' ? data : {};
        let result = new WorkDayForListDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Date"] = this.date ? this.date.toISOString() : <any>null;
        if (this.workers && this.workers.constructor === Array) {
            data["Workers"] = [];
            for (let item of this.workers)
                data["Workers"].push(item.toJSON());
        }
        return data; 
    }

    clone(): WorkDayForListDto {
        const json = this.toJSON();
        let result = new WorkDayForListDto();
        result.init(json);
        return result;
    }
}

export interface IWorkDayForListDto {
    date: Date;
    workers?: UserForListDto[] | null;
}

export class ErrorDetails implements IErrorDetails {
    messages?: string[] | null;

    constructor(data?: IErrorDetails) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            if (data["Messages"] && data["Messages"].constructor === Array) {
                this.messages = [] as any;
                for (let item of data["Messages"])
                    this.messages!.push(item);
            }
        }
    }

    static fromJS(data: any): ErrorDetails {
        data = typeof data === 'object' ? data : {};
        let result = new ErrorDetails();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (this.messages && this.messages.constructor === Array) {
            data["Messages"] = [];
            for (let item of this.messages)
                data["Messages"].push(item);
        }
        return data; 
    }

    clone(): ErrorDetails {
        const json = this.toJSON();
        let result = new ErrorDetails();
        result.init(json);
        return result;
    }
}

export interface IErrorDetails {
    messages?: string[] | null;
}