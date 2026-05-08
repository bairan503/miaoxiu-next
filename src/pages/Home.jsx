import { ArrowRight, Award, Users, Heart, TrendingUp, Leaf, Sparkles, Globe } from 'lucide-react'

const Home = ({ onNavigate }) => {


  const features = [
    {
      title: '非遗传承',
      description: '传承千年苗绣技艺，守护民族文化瑰宝。苗绣作为国家级非物质文化遗产，承载着苗族人民的历史记忆和文化智慧。',
      color: 'bg-meta-blue/10 text-meta-blue',
      icon: Award,
    },
    {
      title: '乡村振兴',
      description: '带动乡村经济发展，助力共同富裕。我们计划与贵州本地乡村绣娘合作，让她们在家门口实现就业增收。',
      color: 'bg-cherry/10 text-cherry',
      icon: Users,
    },
    {
      title: '匠心工艺',
      description: '每一件作品都凝聚着匠人的心血与智慧。从设计到成品，历经数十道工序，确保每一件产品都是精品。',
      color: 'bg-grape/10 text-grape',
      icon: Heart,
    },
  ]

  const services = [
    {
      title: '定制服务',
      description: '根据您的需求，量身定制专属苗绣作品',
      icon: Sparkles,
    },
    {
      title: '企业礼品',
      description: '为企业提供具有文化特色的商务礼品解决方案',
      icon: Globe,
    },
    {
      title: '文化体验',
      description: '组织苗绣文化体验活动，感受非遗魅力',
      icon: Leaf,
    },
  ]


  return (
    <div className="pt-16">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-meta"></div>
        <div className="absolute inset-0 bg-cover bg-center opacity-60" 
          style={{ backgroundImage: `url('/images/homeheaderbk.jpg')` }}>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-block bg-white/20 backdrop-blur-sm rounded-pill px-4 py-2 mb-6">
            <span className="text-white/90 text-sm">传承苗族文化 · 助力乡村振兴</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            苗绣竹韵
          </h1>
          <p className="text-xl text-white/90 mb-4 max-w-2xl mx-auto">
            以传统手工艺为纽带，连接古老文明与现代生活，让非遗文化焕发新生
          </p>
          <p className="text-base text-white/70 mb-8 max-w-2xl mx-auto">
            苗绣竹韵成立于2025年，是一个致力于苗族刺绣文化传承与推广的青年初创团队。我们通过"非遗+科技+环保"的模式，将传统苗绣技艺与现代设计相结合，打造具有市场竞争力的文化产品，带动乡村绣娘增收致富。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => onNavigate('culture')} className="btn-primary inline-flex items-center justify-center space-x-2">
              <span>深入了解</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button onClick={() => onNavigate('about')} className="btn-secondary">
              探索产品
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-dark-charcoal mb-4">我们的理念</h2>
            <p className="text-slate-gray max-w-2xl mx-auto">传承文化，创造价值，让每一针每一线都诉说着民族的故事</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card-feature elevation-1 hover:elevation-2">
                <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-dark-charcoal mb-3">{feature.title}</h3>
                <p className="text-slate-gray">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-dark-charcoal mb-4">我们的服务</h2>
            <p className="text-slate-gray">为您提供全方位的苗绣文化服务</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center p-8 bg-soft-gray rounded-card hover-lift">
                <div className="w-16 h-16 bg-meta-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-meta-blue" />
                </div>
                <h3 className="text-lg font-semibold text-dark-charcoal mb-2">{service.title}</h3>
                <p className="text-slate-gray">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-meta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-white mb-4">加入我们，传承非遗</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            无论您是想学习苗绣技艺，还是寻找合作机会，我们都期待与您携手
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => onNavigate('contact')} className="bg-white text-meta-blue px-8 py-3 rounded-pill font-semibold hover:bg-gray-100 transition-colors">
              联系我们
            </button>
            <button onClick={() => onNavigate('culture')} className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-pill font-semibold hover:bg-white/10 transition-colors">
              了解文化
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
