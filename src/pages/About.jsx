import { History, Users, Award, Target, Leaf, Heart, Globe, TrendingUp } from 'lucide-react'

const About = ({ onNavigate }) => {
  const milestones = [
    { year: '2018', title: '公司成立', description: '苗绣竹韵正式成立，致力于苗绣文化传承，首批签约绣娘50人' },
    { year: '2019', title: '非遗认证', description: '获得国家级非物质文化遗产保护单位认证，产品入驻电商平台' },
    { year: '2020', title: '乡村合作', description: '与50个苗族村寨建立合作关系，带动200户家庭增收' },
    { year: '2021', title: '电商拓展', description: '入驻各大电商平台，产品远销海内外，年销售额突破1000万' },
    { year: '2022', title: '技艺培训', description: '开展苗绣技艺培训，培养新一代传承人，累计培训500人次' },
    { year: '2023', title: '品牌升级', description: '完成品牌升级，推出全新产品线，合作绣娘突破500人' },
  ]

  const team = [
    { name: '王绣娘', role: '首席非遗传承人', experience: '30年苗绣经验，省级非遗传承人', desc: '自幼跟随祖母学习苗绣，精通平绣、辫绣、打籽绣等多种技法' },
    { name: '李老师', role: '工艺总监', experience: '15年传统工艺研究', desc: '毕业于中央美术学院，致力于传统工艺与现代设计的融合创新' },
    { name: '张经理', role: '运营总监', experience: '10年电商运营经验', desc: '曾任职于阿里巴巴，擅长品牌运营和电商渠道拓展' },
    { name: '陈设计师', role: '首席设计师', experience: '8年服装设计经验', desc: '毕业于北京服装学院，将苗绣元素融入现代时尚设计' },
  ]

  const values = [
    { icon: Heart, title: '匠心传承', desc: '坚守传统工艺，传承千年技艺，让每一件作品都成为艺术品' },
    { icon: Users, title: '共同富裕', desc: '带动乡村绣娘增收致富，实现经济效益与社会效益双赢' },
    { icon: Globe, title: '文化自信', desc: '弘扬民族文化，让苗绣走向世界，展现中华文化魅力' },
    { icon: Leaf, title: '可持续发展', desc: '注重环保理念，使用天然材料，践行绿色发展' },
  ]

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-meta text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">关于我们</h1>
            <p className="text-xl text-white/80 mb-6">
              苗绣竹韵致力于传承和推广苗族刺绣文化，通过传统手工艺助力乡村振兴事业
            </p>
            <p className="text-white/70">
              我们是一家青年初创团队，以"传承文化、创造价值、共同富裕"为使命，通过"公司+合作社+绣娘"的运营模式，将传统苗绣技艺与现代设计相结合，打造具有市场竞争力的文化产品。
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
                  苗绣竹韵诞生于贵州黔东南的苗族村寨，这里是苗族刺绣文化的发源地。我们的创始人王绣娘，自幼跟随祖母学习苗绣技艺，深知这门传统工艺的珍贵价值。
                </p>
                <p>
                  2018年，王绣娘联合几位志同道合的传承人，创立了苗绣竹韵。我们的使命是让更多人了解和喜爱苗绣文化，同时通过产业化发展，帮助乡村绣娘实现增收致富。
                </p>
                <p>
                  多年来，我们坚持传统手工制作，每一件产品都凝聚着匠人的心血。我们与500多位绣娘建立了长期合作，覆盖贵州、湖南、云南等多个苗族聚居地。
                </p>
                <p>
                  我们的产品远销海内外，曾作为国礼赠送给外国友人，也多次在国际文化展览中获奖。苗绣竹韵正在成为传播中华文化的一张亮丽名片。
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://neeko-copilot.bytedance.net/api/text2image?prompt=elderly%20chinese%20miao%20woman%20doing%20traditional%20embroidery%20craftwork%20cultural%20heritage&image_size=portrait_4_3"
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

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-charcoal mb-4">核心团队</h2>
            <p className="text-slate-gray">专业团队，守护非遗传承</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="bg-soft-gray rounded-card p-6 hover-lift">
                <div className="w-20 h-20 bg-meta-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-meta-blue" />
                </div>
                <h3 className="text-lg font-semibold text-dark-charcoal mb-1 text-center">{member.name}</h3>
                <div className="text-meta-blue font-medium mb-2 text-center text-sm">{member.role}</div>
                <div className="text-slate-gray text-sm mb-2 text-center">{member.experience}</div>
                <p className="text-slate-gray text-xs text-center">{member.desc}</p>
              </div>
            ))}
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
                传承苗族刺绣文化，保护非物质文化遗产，通过产业化发展助力乡村振兴，让传统手工艺在现代社会焕发新生。我们致力于打造一个连接传统与现代、城市与乡村的文化桥梁。
              </p>
            </div>
            <div className="bg-soft-gray rounded-card p-8">
              <div className="w-16 h-16 bg-cherry/10 rounded-card flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-cherry" />
              </div>
              <h3 className="text-xl font-semibold text-dark-charcoal mb-4">愿景</h3>
              <p className="text-slate-gray">
                成为中国最具影响力的非遗文化品牌，让苗绣技艺走向世界，为乡村振兴贡献力量，实现文化传承与经济发展的双赢。我们希望让每一位绣娘都能通过自己的双手创造美好生活。
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
