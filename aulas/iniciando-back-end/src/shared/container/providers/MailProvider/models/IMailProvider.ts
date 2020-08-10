import ISendMailDTO from '../dtos/ISendMailDTO';

export default interface IMail {
  sendMail(data: ISendMailDTO): Promise<void>;
}
