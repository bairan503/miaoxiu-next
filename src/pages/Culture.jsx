import { History, Palette, BookOpen, Video, Play } from 'lucide-react'

const Culture = ({ onNavigate }) => {
  const techniques = [
    { name: '平绣', description: '最基础的刺绣技法，线条流畅，色彩鲜艳', image: '/images/mxcpx.jpg' },
    { name: '辫绣', description: '用彩色丝线编织成辫子状图案，立体感强', image: '/images/mxcbx.jpg' },
    { name: '邹绣', description: '色彩搭配大胆、新颖、粗而不俗，如同浮雕，具有强烈的立体感', image: '/images/mxczx.jpg' },
    { name: '破线绣', description: '将丝线劈成细缕，表现细腻纹理', image: '/images/mxcpxx.jpg' },
    { name: '挑花', description: '在布上挑纱而成，图案对称精美', image: '/images/mxcth.jpg' },
    { name: '缠绣', description: '具有强烈的夸张和变形的艺术效果', image: '/images/mxccx.jpg' },
  ]

  const patterns = [
    { name: '蝴蝶纹', meaning: '“妹榜妹留”，是苗民祖先的象征，具有繁衍与生命延续的寓意',image:'/images/mxchdw.jpg' },
    { name: '牡丹纹', meaning: '“花中之王”，代表着财富、荣华和吉祥' ,image:'/images/mxcmdw.jpg' },
    { name: '石榴纹', meaning: '多子多福的象征，寓意子孙繁荣昌盛，家族代代相传',image:'/images/mxcslw.jpg'  },
    { name: '鱼纹', meaning: '源于“稻作渔捞”，是生殖繁衍的象征，代表子孙绵延',image:'/images/mxcyw.jpg'  },
    { name: '鸟纹', meaning: '象征苗族的图腾崇拜，寓意自由',image:'/images/mxcnw.jpg'  },
    { name: '枫树纹', meaning: '“妈妈树”，象征坚韧与顽强，寓意生命蓬勃与家族兴旺',image:'/images/mxcfsw.jpg'  },
  ]

  const videos = [
    { title: '苗绣技艺入门', duration: '15:30', iframeSrc: '//player.bilibili.com/player.html?isOutside=true&aid=711260270&bvid=BV1LD4y1S7ne&cid=210043080&p=1', url: 'https://www.bilibili.com/video/BV1LD4y1S7ne' },
    { title: '传统纹样解读', duration: '20:15', iframeSrc: '//player.bilibili.com/player.html?isOutside=true&aid=818006506&bvid=BV1dG4y1V7Q8&cid=903392021&p=1', url: 'https://www.bilibili.com/video/BV1dG4y1V7Q8' },
    { title: '非遗传承人访谈', duration: '25:00', iframeSrc: '//player.bilibili.com/player.html?isOutside=true&aid=220593561&bvid=BV128411L7xb&cid=903924021&p=1', url: 'https://www.bilibili.com/video/BV128411L7xb' },
  ]

  return (
    <div className="pt-16">
      <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-meta"></div>
        <div className="absolute inset-0 bg-cover bg-center opacity-30" 
          style={{ backgroundImage: `url('/images/mxcultureheader.png')` }}>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">文化传承</h1>
            <p className="text-xl text-white/90">探索苗绣千年文化，感受非遗魅力</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-600 px-4 py-2 rounded-full mb-6">
                <History className="w-5 h-5" />
                <span className="font-medium">历史渊源</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">苗绣的千年传承</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  苗族刺绣历史悠久，最早可以追溯到汉代。据史料记载，苗族先民在迁徙过程中，将刺绣技艺带到了今天的贵州、湖南、云南等地。
                </p>
                <p>
                  苗绣不仅是一种装饰艺术，更是苗族文化的重要载体。每一幅苗绣作品都蕴含着苗族人民对自然、生命、爱情的理解和向往。
                </p>
                <p>
                  2006年，苗族刺绣被列入第一批国家级非物质文化遗产名录，成为中华民族珍贵的文化瑰宝。
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/mxculture1.jpg"
                alt="苗绣历史"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-bold">2000+</div>
                <div className="text-sm opacity-80">年历史传承</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-accent-100 text-accent-600 px-4 py-2 rounded-full mb-6">
              <Palette className="w-5 h-5" />
              <span className="font-medium">刺绣技法</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">六大传统技法</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techniques.map((technique, index) => (
              <div key={index} className="relative bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${technique.image})` }}></div>
                <div className="relative p-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary-600">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{technique.name}</h3>
                  <p className="text-gray-600">{technique.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-yellow-100 text-yellow-600 px-4 py-2 rounded-full mb-6">
              <BookOpen className="w-5 h-5" />
              <span className="font-medium">纹样寓意</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">图案中的文化密码</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {patterns.map((pattern, index) => (
              <div key={index} className="relative bg-gray-50 rounded-xl p-6 text-center hover:bg-primary-50 transition-colors overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url(${pattern.image})` }}></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{pattern.name}</h3>
                  <p className="text-sm text-gray-500">{pattern.meaning}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-6">
              <Video className="w-5 h-5" />
              <span className="font-medium">视频教程</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">学习苗绣技艺</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative aspect-video bg-gray-200">
                  <iframe
                    src={video.iframeSrc}
                    scrolling="no"
                    border="0"
                    frameBorder="no"
                    framespacing="0"
                    allowFullScreen="true"
                    className="w-full h-full"
                  ></iframe>
                  <div className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 rounded text-xs flex items-center space-x-1">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.58 15.96c.23-.15.47-.3.7-.46-.09-.2-.18-.41-.25-.63.29-.18.56-.38.81-.6-.17-.29-.31-.6-.41-.91.31-.24.6-.5.86-.79-.14-.31-.24-.64-.3-.98.34-.27.65-.56.94-.87-.15-.36-.26-.74-.33-1.13C12.16 8.45 12.5 8 13 8c.52 0 1 .42 1 1 0 .43-.27.8-.67.93.12.38.27.77.46 1.15-.29.11-.6.2-.92.26-.06.35-.16.68-.3 1 .26.1.51.23.75.38-.1.31-.24.61-.41.89.22.15.45.32.69.5-.27.12-.56.21-.86.28-.08.36-.2.7-.36 1.04.24.16.49.33.76.5-.34.21-.71.39-1.1.52.08.3.19.58.33.85-.36.17-.74.3-1.14.38-.09.34-.22.66-.39.95.18.13.37.27.58.42-.23.14-.48.26-.74.37z"/>
                    </svg>
                    <span>B站</span>
                  </div>
                  <a href={video.url} target="_blank" rel="noopener noreferrer" className="absolute bottom-3 right-3 bg-black/60 text-white px-3 py-1 rounded-full text-sm hover:bg-black/80 transition-colors flex items-center space-x-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span>查看详情</span>
                  </a>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">{video.title}</h3>
                  <p className="text-sm text-gray-500">{video.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">加入非遗传承计划</h3>
          <p className="mb-6">学习苗绣技艺，成为非遗传承的一份子</p>
          <button onClick={() => onNavigate('contact')} className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            立即报名
          </button>
        </div>
      </section>
    </div>
  )
}

export default Culture
