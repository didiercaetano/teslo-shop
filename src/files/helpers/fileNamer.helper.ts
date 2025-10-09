import { v4 as uuid } from 'uuid';

export const fileNamer = (
  req: Express.Request,
  file: unknown,
  callback: (error: Error | null, filename: string) => void,
) => {
  const mimetype = (file as { mimetype: string }).mimetype;
  const fileExtension = mimetype.split('/')[1];

  const fileName = `${uuid()}.${fileExtension}`;

  callback(null, fileName);
};
