import { History, Users, Award, Target, Leaf, Heart, Globe, TrendingUp } from 'lucide-react'

const About = ({ onNavigate }) => {
  const milestones = [
    { year: '2025', title: '项目启动', description: '省级大创项目立项，团队组建完成，开始市场调研' },
    { year: '2025', title: '产品定义', description: '完成5大系列产品概念设计，涵盖智能床品、壁饰、窗帘、柜体及衍生品' },
    { year: '2025', title: '模式构建', description: '确立轻资产联创平台模式' },
    { year: '2026', title: '知识产权', description: '提交外观设计专利申请，完成学术论文撰写' },
    { year: '2026', title: '平台上线', description: '品牌展示网站上线，集成AR体验预览和产品三维展示' },
    { year: '2026', title: '成果验收', description: '项目顺利结项，获得新文科创新创业大赛校级铜奖' },
  ]

  const team = [
    { name: '辛佳慧', role: '项目负责人', experience: '法学专业，统筹管理', desc: '负责项目整体规划、资源协调与时间管理，带领团队完成各项任务' },
    { name: '解玉姣', role: '品牌设计师', experience: '视觉传达设计', desc: '负责品牌设计和产品外观，将传统苗绣纹样与现代极简风格相融合' },
    { name: '张含悦', role: '市场调研', experience: '市场营销专业', desc: '负责市场调研和文案撰写，用数据驱动产品定位和定价策略' },
    { name: '雒佳豪', role: '技术开发', experience: '计算机专业', desc: '负责品牌网站设计搭建，实现产品三维展示和AR体验预览功能' },
  ]

  const values = [
    { icon: Heart, title: '非遗活化', desc: '突破博物馆式保存局限，将传统纹样融入现代家居，打造可居住的非遗博物馆' },
    { icon: Users, title: '乡村振兴', desc: '与贵州竹产业合作社和苗绣工坊合作，带动竹农和绣娘增收致富' },
    { icon: Globe, title: '文化创新', desc: '运用AR技术实现文化动态交互，让千年苗绣技艺在当代生活中焕发新生' },
    { icon: Leaf, title: '绿色环保', desc: '全链路采用可降解竹纤维材料，践行可持续发展理念' },
  ]

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-meta text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <img
            src="/images/aboutheader.jpg"
            alt="苗绣背景"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">关于我们</h1>
            <p className="text-xl text-white/80 mb-6">
              苗绣竹韵家居——非遗活化与轻资产联创平台
            </p>
            <p className="text-white/70">
              我们是一支由大学生组成的创业团队，致力于将贵州苗绣非遗技艺与现代智能家居相结合。通过"非遗+科技+环保"的创新模式，打造具有文化内涵与实用功能的家居产品，助力乡村振兴。
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-meta-blue/10 text-meta-blue px-4 py-2 rounded-full mb-6">
                <History className="w-5 h-5" />
                <span className="font-medium">历史渊源</span>
              </div>
              <h2 className="text-3xl font-bold text-dark-charcoal mb-6">我们的故事</h2>
              <div className="space-y-4 text-slate-gray">
                <p>
                  苗绣竹韵家居项目源于贵州国家级非遗苗绣，针对非遗传承断层、乡村经济薄弱、智能家居产品同质化等社会痛点，提出非遗传承、环保创新与体验经济相结合的系统性解决方案。
                </p>
                <p>
                  项目团队由法学、设计、营销、计算机等多专业大学生组成，在郝少英、石红溶两位导师指导下，完成了市场调研、产品设计、模式构建到平台搭建的全流程实践。
                </p>
                <p>
                  我们的核心创新在于构建轻资产联创平台，整合非遗传承人、高校设计团队、技术企业和场景渠道，形成"设计+技术+渠道"的商业闭环。
                </p>
                <p>
                  项目获得省级大学生创新训练计划立项支持，完成学术论文1篇、专利申请1项、5大系列产品设计，并自主开发品牌展示网站。
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/about1.png"
                alt="苗绣传承"
                className="w-full h-80 object-cover rounded-card shadow-elevated"
              />
              <div className="absolute -bottom-6 -left-6 bg-meta-blue text-white p-6 rounded-card shadow-elevated">
                <div className="text-4xl font-bold">500+</div>
                <div className="text-sm opacity-80">合作绣娘</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-charcoal mb-4">发展历程</h2>
            <p className="text-slate-gray">从传承到创新，我们一直在路上</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-meta-blue/20"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className={`inline-block bg-white rounded-card p-6 shadow-subtle ${index % 2 === 0 ? 'ml-auto' : ''}`}>
                      <div className="text-meta-blue font-bold text-lg mb-2">{milestone.year}</div>
                      <div className="text-dark-charcoal font-semibold mb-1">{milestone.title}</div>
                      <div className="text-slate-gray text-sm">{milestone.description}</div>
                    </div>
                  </div>
                  <div className="relative z-10 w-4 h-4 bg-meta-blue rounded-full border-4 border-white shadow"></div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-charcoal mb-4">核心价值观</h2>
            <p className="text-slate-gray">我们坚守的理念与追求</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-card p-6 text-center hover-lift">
                <div className="w-14 h-14 bg-meta-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-meta-blue" />
                </div>
                <h3 className="text-lg font-semibold text-dark-charcoal mb-2">{value.title}</h3>
                <p className="text-slate-gray text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-charcoal mb-4">我们的使命与愿景</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-soft-gray rounded-card p-8">
              <div className="w-16 h-16 bg-meta-blue/10 rounded-card flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-meta-blue" />
              </div>
              <h3 className="text-xl font-semibold text-dark-charcoal mb-4">使命</h3>
              <p className="text-slate-gray">
                突破苗绣博物馆式保存局限，将传统纹样融入智能床品、窗帘、壁饰等现代家居产品，借助AR技术实现文化动态交互，打造可居住的非遗博物馆，带动乡村绣娘增收致富。
              </p>
            </div>
            <div className="bg-soft-gray rounded-card p-8">
              <div className="w-16 h-16 bg-cherry/10 rounded-card flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-cherry" />
              </div>
              <h3 className="text-xl font-semibold text-dark-charcoal mb-4">愿景</h3>
              <p className="text-slate-gray">
                构建轻资产联创平台，成为非遗活化的典范案例。通过"非遗+科技+环保"模式，实现文化传承与经济发展的双赢，为乡村振兴贡献青年力量。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-meta text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">加入我们的行列</h3>
          <p className="text-white/80 mb-6">无论您是绣娘、设计师还是合作伙伴，我们都期待与您携手</p>
          <button onClick={() => onNavigate('contact')} className="bg-white text-meta-blue px-8 py-3 rounded-pill font-semibold hover:bg-gray-100 transition-colors">
            联系我们
          </button>
        </div>
      </section>
    </div>
  )
}

export default About
