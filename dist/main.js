'use strict';function _0x4778(_0x4a7d08,_0x1b8986){var _0x49b6e2=_0x49b6();return _0x4778=function(_0x4778bc,_0x552515){_0x4778bc=_0x4778bc-0x6e;var _0x29b1ca=_0x49b6e2[_0x4778bc];return _0x29b1ca;},_0x4778(_0x4a7d08,_0x1b8986);}var _0x1cf70a=_0x4778;(function(_0x30e514,_0x25047d){var _0x217de5=_0x4778,_0x483d5c=_0x30e514();while(!![]){try{var _0x37e2bb=parseInt(_0x217de5(0x8d))/0x1*(parseInt(_0x217de5(0x8e))/0x2)+parseInt(_0x217de5(0x90))/0x3*(parseInt(_0x217de5(0x8a))/0x4)+parseInt(_0x217de5(0x85))/0x5+-parseInt(_0x217de5(0x78))/0x6*(-parseInt(_0x217de5(0x7a))/0x7)+parseInt(_0x217de5(0x79))/0x8*(parseInt(_0x217de5(0x71))/0x9)+parseInt(_0x217de5(0x7f))/0xa*(parseInt(_0x217de5(0x8c))/0xb)+parseInt(_0x217de5(0x86))/0xc*(-parseInt(_0x217de5(0x92))/0xd);if(_0x37e2bb===_0x25047d)break;else _0x483d5c['push'](_0x483d5c['shift']());}catch(_0x2d67a4){_0x483d5c['push'](_0x483d5c['shift']());}}}(_0x49b6,0x4352d));function _0x49b6(){var _0x1c8b0d=['defineProperty','dotenv','NestFactory','/api/v1/','30MBjLAq','@nestjs/core','JwtAuthGuard','PORT','./core/interceptors/transform.interceptor','env','615220yomoNg','12CCvDRZ','Reflector','use','listen','154316UjVHiH','@nestjs/common','989835voGHjn','12626NtuCvw','66pailtB','__esModule','3XviWvh','TransformInterceptor','14172431hWXuZC','setGlobalPrefix','./app.module','__importDefault','18ludUkG','enableCors','default','create','useGlobalInterceptors','config','useGlobalPipes','1409802vaBKDZ','191096ptXfkL','14EBDpSi'];_0x49b6=function(){return _0x1c8b0d;};return _0x49b6();}var __importDefault=this&&this[_0x1cf70a(0x70)]||function(_0x1c2720){return _0x1c2720&&_0x1c2720['__esModule']?_0x1c2720:{'default':_0x1c2720};};Object[_0x1cf70a(0x7b)](exports,_0x1cf70a(0x8f),{'value':!0x0});const core_1=require(_0x1cf70a(0x80)),common_1=require(_0x1cf70a(0x8b)),app_module_1=require(_0x1cf70a(0x6f)),transform_interceptor_1=require(_0x1cf70a(0x83)),cookie_parser_1=__importDefault(require('cookie-parser')),jwt_auth_guard_1=require('./auth/jwt-auth.guard'),delay_middleware_1=__importDefault(require('./core/delay.middleware'));async function bootstrap(){var _0x336ebd=_0x1cf70a,_0x43eab0=process[_0x336ebd(0x84)][_0x336ebd(0x82)]||0x1f40,_0x402ef5=await core_1[_0x336ebd(0x7d)][_0x336ebd(0x74)](app_module_1['AppModule']),_0x50b5dc=(_0x402ef5[_0x336ebd(0x72)]({'origin':!0x0,'methods':'GET,HEAD,PUT,PATCH,POST,DELETE','preflightContinue':!0x1,'credentials':!0x0}),_0x402ef5[_0x336ebd(0x88)]((0x0,cookie_parser_1[_0x336ebd(0x73)])()),_0x402ef5[_0x336ebd(0x77)](new common_1['ValidationPipe']({'whitelist':!0x0})),_0x402ef5[_0x336ebd(0x75)](new transform_interceptor_1[(_0x336ebd(0x91))]()),_0x402ef5[_0x336ebd(0x6e)](_0x336ebd(0x7e),{'exclude':['/']}),_0x402ef5['get'](core_1[_0x336ebd(0x87)]));_0x402ef5['useGlobalGuards'](new jwt_auth_guard_1[(_0x336ebd(0x81))](_0x50b5dc)),_0x402ef5['use'](delay_middleware_1[_0x336ebd(0x73)]),await _0x402ef5[_0x336ebd(0x89)](_0x43eab0);}require(_0x1cf70a(0x7c))[_0x1cf70a(0x76)](),bootstrap();