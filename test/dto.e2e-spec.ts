import { CatDto } from '../src/dto/cat.dto';

describe('dto (e2e)', () => {
  it('can instantiate a dto annotated with an ApiProperty decorator', () => {
    new CatDto();
  });
});
