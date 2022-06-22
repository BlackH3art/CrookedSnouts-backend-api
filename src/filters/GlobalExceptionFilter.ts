import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import { Request, Response } from "express";


@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {

  catch(exception: any, host: ArgumentsHost) {
    
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;


    return response.status(404).json({
      status,
      message: exception.message,
      isOk: false
    })
  }
}