/* eslint-disable @typescript-eslint/ban-ts-ignore */
import { createWriteStream } from 'streamsaver';

export const downloadFile = (url, fileName) => {
  return fetch(url)
    .then(res => {
      const fileStream = createWriteStream(fileName);
      const writer = fileStream.getWriter();
      // @ts-ignore
      if (res.body.pipeTo) {
        writer.releaseLock();
        // @ts-ignore
        return res.body.pipeTo(fileStream);
      }

      // @ts-ignore
      const reader = res.body.getReader();
      const pump = () =>
        reader
          .read()
          .then(({ value, done }) =>
            done ? writer.close() : writer.write(value).then(pump)
          );

      return pump();
    })
    .catch(error => console.error(error));
};
