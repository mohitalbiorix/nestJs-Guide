import { IsString } from "class-validator";

export class CreateMessageDtO {
    @IsString()
    content: string;
}