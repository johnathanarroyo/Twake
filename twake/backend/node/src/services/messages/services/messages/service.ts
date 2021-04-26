import { TwakeContext } from "../../../../core/platform/framework";
import { DatabaseServiceAPI } from "../../../../core/platform/services/database/api";
import Repository from "../../../../core/platform/services/database/services/orm/repository/repository";
import { MessageServiceAPI, MessageThreadMessagesServiceAPI } from "../../api";
import { Message } from "../../entities/messages";

export class ThreadMessagesService implements MessageThreadMessagesServiceAPI {
  version: "1";
  repository: Repository<Message>;

  constructor(private database: DatabaseServiceAPI, private service: MessageServiceAPI) {}

  async init(context: TwakeContext): Promise<this> {
    return this;
  }
}
