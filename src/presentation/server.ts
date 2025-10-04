import { CheckService } from "../domain/use-cases/checks/check-service";
import { SendEmailLogs } from "../domain/use-cases/email/send-email-logs";
import { FileSystemDatasource } from "../infrastructure/file-system.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";
import { EmailService } from "./email/email.service";

const emailService = new EmailService();
const fileSystemLogRepository = new LogRepositoryImpl(
  new FileSystemDatasource()
);

export class Server {
  constructor() {}

  public static start() {
    console.log("Server started...");
    // new SendEmailLogs(emailService, fileSystemLogRepository).execute(
    //   "leonardo.valeriano.2140@gmail.com"
    // );

    // const url = "https://google.com";
    // CronService.createJob("*/5 * * * * *", () => {
    //   new CheckService(
    //     fileSystemLogRepository,
    //     () => console.log(`${url} is ok`),
    //     (error) => console.log(error)
    //   ).execute(url);
    // });
  }
}
