import { EchoExecutorSchema } from './schema';
import executor from './executor';

const options: EchoExecutorSchema = {
  text: "test"
};

describe('Echo Executor', () => {
  it('can run', async () => {
    const output = await executor(options, null);
    expect(output.success).toBe(true);
  });
});