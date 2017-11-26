import {
	requesr_get 
} from '@/common/js/request';

const API_CONFIG = '/api/message';

/*
[getAllMessage] 获取某个用户的首页的所有消息
@param  {[type]}  userId  用户id
@return {9type]}          消息
*/
export const get_all_message = (userId) => {
	const url = `${API_CONFIG}/all/${userId}`;
	return request_get(url);
}