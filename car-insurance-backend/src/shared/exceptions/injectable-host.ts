import { HttpAdapterHost } from '@nestjs/core';

export interface InjectableHost {
  host: HttpAdapterHost;
  injectHost(host: HttpAdapterHost): void;
}
