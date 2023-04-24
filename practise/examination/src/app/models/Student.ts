import { Association } from "./Association";
import { Instructor } from "./Instructor";

export interface Student {
    id: number;
    studentCode: string;
    studentName: string;
    email: string;
    phoneNumber: string;
    association: Association;
    instructor: Instructor;
}