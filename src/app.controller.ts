import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getRoot(): string {
    return 'API corriendo correctamente 🚀';
  }

  @Get('cors-test')
  corsTest(): any {
    return {
      message: 'CORS funcionando correctamente',
      timestamp: new Date().toISOString(),
      origin: 'backend-render'
    };
  }

  @Post('cors-test')
  corsTestPost(@Body() body: any): any {
    return {
      message: 'POST CORS funcionando correctamente',
      timestamp: new Date().toISOString(),
      receivedData: body,
      origin: 'backend-render'
    };
  }
}
