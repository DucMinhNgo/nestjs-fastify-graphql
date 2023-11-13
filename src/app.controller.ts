import { Controller, Get } from '@nestjs/common';

const { getAudioDurationInSeconds } = require('get-audio-duration');

@Controller()
export class AppController {
  @Get('/health')
  healthCheck() {
    getAudioDurationInSeconds('music1.mp3').then((duration) => {
      console.log(duration)
    });
    return {
      message: 'Service is alive',
      status: 200,
    };
  }
}