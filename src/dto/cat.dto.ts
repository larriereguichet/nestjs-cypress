import { ApiProperty } from '@nestjs/swagger';

export class CatDto {
  @ApiProperty()
  name: string;
}
