/*
 * @Description: 上传文件 Dto
 * @Version: 2.0
 * @Author: 白雾茫茫丶
 * @Date: 2022-11-25 10:34:23
 * @LastEditors: 齐大胜 782395122@qq.com
 * @LastEditTime: 2025-02-20 09:37:59
 */
import { ApiProperty } from '@nestjs/swagger';

export class UploadFileDto {
  @ApiProperty({
    type: String,
    description: '文件流',
    format: 'binary',
  })
  file: Buffer;
}
