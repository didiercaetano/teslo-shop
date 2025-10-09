import { BadRequestException, Injectable } from '@nestjs/common';
import { execSync } from 'child_process';
import { join } from 'path';

@Injectable()
export class FilesService {
  getStaticProductImage(imageName: string) {
    const path = join(__dirname, '../../static/products', imageName);

    if (!execSync(path))
      throw new BadRequestException(`No image found with name ${imageName}`);

    return path;
  }
}
