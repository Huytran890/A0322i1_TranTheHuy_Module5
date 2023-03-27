import { facility } from './../facility/facility';
import { customer } from './../customer/customer';

export interface contract {
    id: number,
    beginDate: Date,
    endDate: Date,
    deposit: number,
    customer: customer,
    facility: facility,
}