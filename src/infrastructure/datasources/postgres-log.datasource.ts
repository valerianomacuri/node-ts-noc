import { LogDatasource } from "../../domain/datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
import { PrismaClient, SeverityLevel } from "../../generated/prisma";

const severityEnum = {
  low: SeverityLevel.LOW,
  medium: SeverityLevel.MEDIUM,
  high: SeverityLevel.HIGH,
};
const prismaClient = new PrismaClient();

export class PostgresLogDatasource implements LogDatasource {
  async saveLog(log: LogEntity): Promise<void> {
    const level = severityEnum[log.level];
    await prismaClient.logModel.create({
      data: {
        ...log,
        level,
      },
    });
    console.log("Postgres saved");
  }
  async getLogs(serverityLevel: LogSeverityLevel): Promise<LogEntity[]> {
    const level = severityEnum[serverityLevel];

    const dbLogs = await prismaClient.logModel.findMany({
      where: { level },
    });

    return dbLogs.map(LogEntity.fromObject);
  }
}
