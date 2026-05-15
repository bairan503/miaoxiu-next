import { useState } from 'react'
import { Calendar, ArrowRight, Tag, Share2, Eye } from 'lucide-react'

const News = ({ onNavigate }) => {
  const [activeTag, setActiveTag] = useState('all')

  const tags = [
    { id: 'all', name: '全部' },
    { id: 'project', name: '项目动态' },
    { id: 'research', name: '研究成果' },
    { id: 'cooperation', name: '合作进展' },
    { id: 'award', name: '荣誉奖项' },
  ]

  const news = [
    {
      id: 1,
      title: '苗绣竹韵家居项目顺利结项',
      excerpt: '省级大创项目完成全部预定目标，获得评审专家高度评价',
      date: '2026-04-13',
      tag: 'project',
      image: 'university%20project%20completion%20ceremony%20academic%20achievement',
      views: 1234,
    },
    {
      id: 2,
      title: '学术论文《基于轻资产联创平台的非遗活化模式研究》完成',
      excerpt: '论文系统梳理项目理论基础、模式创新与实践经验，为非遗产业化提供理论参考',
      date: '2026-04-01',
      tag: 'research',
      image: 'academic%20research%20paper%20writing%20university%20study',
      views: 890,
    },
    {
      id: 3,
      title: '外观设计专利申请提交',
      excerpt: '提交"苗绣衣柜"外观设计专利申请，为项目建立初步技术壁垒',
      date: '2026-03-15',
      tag: 'research',
      image: 'patent%20application%20intellectual%20property%20design%20protection',
      views: 654,
    },
    {
      id: 4,
      title: '品牌展示网站正式上线',
      excerpt: '集成产品三维展示、AR体验预览、文化故事等模块的官方网站上线运营',
      date: '2026-03-01',
      tag: 'project',
      image: 'website%20launch%20digital%20platform%20modern%20web%20design',
      views: 1567,
    },
    {
      id: 5,
      title: '与贵州民宿酒店达成合作意向',
      excerpt: '与西江千户苗寨景区2家高端民宿、1家文旅酒店达成"苗绣主题房"合作意向',
      date: '2026-02-15',
      tag: 'cooperation',
      image: 'hotel%20partnership%20agreement%20business%20collaboration%20meeting',
      views: 1123,
    },
    {
      id: 6,
      title: '市场调研完成，消费者意向积极',
      excerpt: '完成111份有效问卷调研，67.57%受访者对文化科技家居产品表现出购买兴趣',
      date: '2026-01-20',
      tag: 'research',
      image: 'market%20research%20survey%20analysis%20consumer%20behavior',
      views: 789,
    },
    {
      id: 7,
      title: '荣获校级创新创业大赛三等奖',
      excerpt: '项目在新文科校级创新创业大赛中获得三等奖，形成良好示范效应',
      date: '2026-01-10',
      tag: 'award',
      image: 'competition%20award%20ceremony%20trophy%20achievement',
      views: 1890,
    },
    {
      id: 8,
      title: '五大系列产品设计完成',
      excerpt: '完成智能苗绣床品、动态光影壁饰、透光窗帘、磁吸柜体、非遗衍生品五大系列设计',
      date: '2025-12-20',
      tag: 'project',
      image: 'product%20design%20sketch%20creative%20innovation%20modern',
      views: 1456,
    },
    {
      id: 9,
      title: '确立轻资产联创平台模式',
      excerpt: '确立"重设计、轻生产、重场景、轻门店"的轻资产运营策略',
      date: '2025-11-15',
      tag: 'project',
      image: 'business%20model%20strategy%20planning%20innovation',
      views: 987,
    },
  ]

  const filteredNews = activeTag === 'all' 
    ? news 
    : news.filter(n => n.tag === activeTag)

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-meta text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">项目动态</h1>
            <p className="text-xl text-white/80">跟踪苗绣竹韵家居项目的最新进展</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-8">
            {tags.map((tag) => (
              <button
                key={tag.id}
                onClick={() => setActiveTag(tag.id)}
                className={`px-5 py-2 rounded-pill font-medium transition-colors ${
                  activeTag === tag.id
                    ? 'bg-meta-blue text-white'
                    : 'bg-soft-gray text-slate-gray hover:bg-gray-200'
                }`}
              >
                <span>{tag.name}</span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map((item) => (
              <div key={item.id} className="bg-soft-gray rounded-card overflow-hidden hover-lift group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={`https://neeko-copilot.bytedance.net/api/text2image?prompt=${item.image}&image_size=landscape_4_3`}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-meta-blue text-white px-3 py-1 rounded-full text-sm">
                      {tags.find(t => t.id === item.tag)?.name}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-slate-gray text-sm mb-3">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{item.date}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{item.views}</span>
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-dark-charcoal mb-2 group-hover:text-meta-blue transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-gray text-sm mb-4 line-clamp-2">{item.excerpt}</p>
                  <button className="flex items-center space-x-2 text-meta-blue font-medium hover:text-meta-blue-hover transition-colors">
                    <span>阅读全文</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredNews.length === 0 && (
            <div className="text-center py-12">
              <div className="text-slate-gray text-xl">暂无相关新闻</div>
            </div>
          )}

          <div className="flex justify-center mt-12">
            <div className="flex items-center space-x-2">
              <button className="px-4 py-2 border border-divider rounded-lg hover:bg-gray-50 transition-colors">
                上一页
              </button>
              <button className="px-4 py-2 bg-meta-blue text-white rounded-lg">1</button>
              <button className="px-4 py-2 border border-divider rounded-lg hover:bg-gray-50 transition-colors">2</button>
              <button className="px-4 py-2 border border-divider rounded-lg hover:bg-gray-50 transition-colors">3</button>
              <button className="px-4 py-2 border border-divider rounded-lg hover:bg-gray-50 transition-colors">
                下一页
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-card p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-dark-charcoal mb-2">订阅我们的新闻资讯</h3>
                <p className="text-slate-gray">获取最新动态和独家优惠信息</p>
              </div>
              <div className="flex w-full md:w-auto">
                <input
                  type="email"
                  placeholder="输入您的邮箱地址"
                  className="flex-1 md:w-64 px-4 py-3 border border-divider rounded-l-pill focus:outline-none focus:ring-2 focus:ring-meta-blue/20"
                />
                <button className="bg-meta-blue text-white px-6 py-3 rounded-r-pill hover:bg-meta-blue-hover transition-colors">
                  订阅
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default News
