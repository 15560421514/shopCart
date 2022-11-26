import { v4 as uuidv4 } from 'uuid';
//要生成一个随机的字符串 且每次执行不能发生变化， 游客身份持久存储
export const getUUID = () => {
  //第一次进来判断本地存储有没有数据
  let uuid_token = localStorage.getItem('UUIDTOKEN');
  if (!uuid_token) {
    //通过uuid随机返回一段编码
    uuid_token = uuidv4();
    //并存储在本地存储
    localStorage.setItem('UUIDTOKEN', uuid_token);
  }
  //返回出去这段编码
  return uuid_token;
}