import { Avatar, Divider } from 'antd'
import '../static/style/components/author.css'

const Author = () => {
    return (
        <div className="author-div comm-box">
            <div> <Avatar size={100} src="http://blogimages.jspang.com/blogtouxiang1.jpg" /> </div>
            <div className="author-introduction">专注WEB何移动端开发。要自己写1000片关于前端领域的技术博客
            <Divider>社交账号</Divider>
                <Avatar size={28} icon="github" className="account" />
                <Avatar size={28} icon="qq" className="account" />
                <Avatar size={28} icon="wechat" className="account" />
            </div>

        </div>
    )
}

export default Author;