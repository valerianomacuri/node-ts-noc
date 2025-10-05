import { LogSeverityLevel } from "../domain/entities/log.entity";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { CheckServiceMultiple } from "../domain/use-cases/checks/check-service-multiple";
import { SendEmailLogs } from "../domain/use-cases/email/send-email-logs";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { MongoLogDatasource } from "../infrastructure/datasources/mongo-log.datasource";
import { PostgresLogDatasource } from "../infrastructure/datasources/postgres-log.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";
import { EmailService } from "./email/email.service";

const emailService = new EmailService();
const fslogRepository = new LogRepositoryImpl(new FileSystemDatasource());
const mongologRepository = new LogRepositoryImpl(new MongoLogDatasource());
const postgreslogRepository = new LogRepositoryImpl(
  new PostgresLogDatasource()
);

export class Server {
  constructor() {}

  public static async start() {
    console.log("Server started...");
    // new SendEmailLogs(emailService, fileSystemLogRepository).execute(
    //   "leonardo.valeriano.2140@gmail.com"
    // );
    // const logs = await logRepository.getLogs(LogSeverityLevel.high);
    // console.log(logs);
    CronService.createJob("*/5 * * * * *", () => {
      const url = "https://google.com";
      new CheckServiceMultiple(
        [fslogRepository, mongologRepository, postgreslogRepository],
        () => console.log(`${url} is ok`),
        (error) => console.log(error)
      ).execute(url);
    });
  }
}
