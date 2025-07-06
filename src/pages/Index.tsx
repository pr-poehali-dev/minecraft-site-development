import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-950 via-stone-900 to-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-black/20 border-b border-green-800/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="Mountain" className="h-8 w-8 text-green-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                CraftWorld
              </span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a
                href="#home"
                className="hover:text-green-400 transition-colors"
              >
                Главная
              </a>
              <a
                href="#features"
                className="hover:text-green-400 transition-colors"
              >
                Особенности
              </a>
              <a
                href="#servers"
                className="hover:text-green-400 transition-colors"
              >
                Сервера
              </a>
              <a
                href="#community"
                className="hover:text-green-400 transition-colors"
              >
                Сообщество
              </a>
            </nav>
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              <Icon name="Users" className="w-4 h-4 mr-2" />
              Присоединиться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/img/17a3884e-f655-456e-80f4-bc3fb41bc605.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/50 to-black/50"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-green-600/20 text-green-300 border-green-500">
              <Icon name="Sparkles" className="w-4 h-4 mr-2" />
              Лучший Minecraft сервер России
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Добро пожаловать в
              </span>
              <br />
              <span className="relative">
                <span className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  CraftWorld
                </span>
                <div className="absolute -inset-1 bg-green-500/20 blur-xl rounded-lg"></div>
              </span>
            </h1>
            <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
              Исследуй бесконечные миры, строй эпические сооружения и
              отправляйся в приключения с друзьями!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4"
              >
                <Icon name="Play" className="w-5 h-5 mr-2" />
                Начать играть
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-500 text-green-400 hover:bg-green-500/10 px-8 py-4"
              >
                <Icon name="Download" className="w-5 h-5 mr-2" />
                Скачать лаунчер
              </Button>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>
                IP:{" "}
                <span className="text-green-400 font-mono">
                  play.craftworld.ru
                </span>
              </p>
              <p>Версия: 1.20.4 - 1.21.x</p>
              <p className="text-green-400 mt-2">🟢 Онлайн: 2,847 игроков</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-black/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Особенности сервера
            </h2>
            <p className="text-xl text-gray-400">
              Почему тысячи игроков выбирают CraftWorld
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border-green-800/30 hover:border-green-600/50 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-600/30 transition-colors">
                  <Icon name="Home" className="w-6 h-6 text-green-400" />
                </div>
                <CardTitle className="text-green-300">Выживание</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400">
                  Классический режим выживания с уникальными модификациями и
                  кастомными биомами.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-green-800/30 hover:border-green-600/50 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-600/30 transition-colors">
                  <Icon name="Pickaxe" className="w-6 h-6 text-green-400" />
                </div>
                <CardTitle className="text-green-300">
                  Кастомные профессии
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400">
                  Развивайте уникальные навыки: кузнец, алхимик, строитель,
                  исследователь и многие другие.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-green-800/30 hover:border-green-600/50 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-600/30 transition-colors">
                  <Icon name="Castle" className="w-6 h-6 text-green-400" />
                </div>
                <CardTitle className="text-green-300">
                  Города и регионы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400">
                  Создавайте свои города, торгуйте с другими игроками и
                  развивайте экономику.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-green-800/30 hover:border-green-600/50 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-600/30 transition-colors">
                  <Icon name="Sword" className="w-6 h-6 text-green-400" />
                </div>
                <CardTitle className="text-green-300">Данжи и квесты</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400">
                  Исследуйте подземелья, выполняйте квесты и сражайтесь с
                  уникальными боссами.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-green-800/30 hover:border-green-600/50 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-600/30 transition-colors">
                  <Icon name="Zap" className="w-6 h-6 text-green-400" />
                </div>
                <CardTitle className="text-green-300">
                  Магия и зачарования
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400">
                  Изучайте магические искусства и создавайте мощные артефакты.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-green-800/30 hover:border-green-600/50 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-600/30 transition-colors">
                  <Icon name="Users" className="w-6 h-6 text-green-400" />
                </div>
                <CardTitle className="text-green-300">
                  Дружелюбное сообщество
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400">
                  Активная модерация, помощь новичкам и регулярные мероприятия.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Servers Section */}
      <section id="servers" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Игровые миры
            </h2>
            <p className="text-xl text-gray-400">Выбери свое приключение</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border-green-800/30 hover:border-green-600/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-green-300">Выживание</CardTitle>
                  <Badge className="bg-green-600/20 text-green-300 border-green-500">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    Онлайн
                  </Badge>
                </div>
                <CardDescription className="text-gray-400">
                  Классический режим выживания с улучшениями
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Игроки:</span>
                    <span className="text-green-400">1,847 / 3,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Версия:</span>
                    <span className="text-green-400">1.21.1</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Сложность:</span>
                    <span className="text-green-400">Нормальная</span>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">
                  Подключиться
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-green-800/30 hover:border-green-600/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-green-300">Креатив</CardTitle>
                  <Badge className="bg-green-600/20 text-green-300 border-green-500">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    Онлайн
                  </Badge>
                </div>
                <CardDescription className="text-gray-400">
                  Строй все, что захочешь
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Игроки:</span>
                    <span className="text-green-400">456 / 1,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Версия:</span>
                    <span className="text-green-400">1.21.1</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Сложность:</span>
                    <span className="text-green-400">Мирная</span>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">
                  Подключиться
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-green-800/30 hover:border-green-600/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-green-300">Мини-игры</CardTitle>
                  <Badge className="bg-green-600/20 text-green-300 border-green-500">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    Онлайн
                  </Badge>
                </div>
                <CardDescription className="text-gray-400">
                  Разнообразные мини-игры и развлечения
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Игроки:</span>
                    <span className="text-green-400">544 / 1,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Версия:</span>
                    <span className="text-green-400">1.21.1</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Игры:</span>
                    <span className="text-green-400">25+</span>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">
                  Подключиться
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 bg-black/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Сообщество
            </h2>
            <p className="text-xl text-gray-400">
              Присоединяйся к тысячам игроков
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gray-900/50 border-green-800/30 hover:border-green-600/50 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-600/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon
                    name="MessageCircle"
                    className="w-8 h-8 text-green-400"
                  />
                </div>
                <CardTitle className="text-green-300">Discord</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-400 mb-4">
                  Общайся с игроками в реальном времени
                </p>
                <Button
                  variant="outline"
                  className="border-green-500 text-green-400 hover:bg-green-500/10"
                >
                  Присоединиться
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-green-800/30 hover:border-green-600/50 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-600/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Users" className="w-8 h-8 text-green-400" />
                </div>
                <CardTitle className="text-green-300">Форум</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-400 mb-4">
                  Обсуждения, гайды и новости
                </p>
                <Button
                  variant="outline"
                  className="border-green-500 text-green-400 hover:bg-green-500/10"
                >
                  Перейти
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-green-800/30 hover:border-green-600/50 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-600/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Trophy" className="w-8 h-8 text-green-400" />
                </div>
                <CardTitle className="text-green-300">Турниры</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-400 mb-4">
                  Участвуй в соревнованиях и выигрывай призы
                </p>
                <Button
                  variant="outline"
                  className="border-green-500 text-green-400 hover:bg-green-500/10"
                >
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-green-800/30 hover:border-green-600/50 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-600/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Gift" className="w-8 h-8 text-green-400" />
                </div>
                <CardTitle className="text-green-300">Магазин</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-400 mb-4">
                  Поддержи сервер и получи бонусы
                </p>
                <Button
                  variant="outline"
                  className="border-green-500 text-green-400 hover:bg-green-500/10"
                >
                  Открыть
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/60 border-t border-green-800/30 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="Mountain" className="h-6 w-6 text-green-500" />
                <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  CraftWorld
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                Лучший Minecraft сервер России. Исследуй, строй, сражайся и
                создавай свою историю!
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-green-300">Игра</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Скачать лаунчер
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Правила
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Карта мира
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Статистика
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-green-300">Сообщество</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Discord
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Telegram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    VK
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Форум
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-green-300">Поддержка</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Помощь
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Контакты
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Донат
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Магазин
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/40 pt-8 mt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 CraftWorld. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
