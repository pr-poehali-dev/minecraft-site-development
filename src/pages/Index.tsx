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
    <div className="min-h-screen bg-background text-foreground dark">
      {/* Header */}
      <header className="border-b border-border/40 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded pixelated"></div>
              <span className="text-2xl font-bold">CubeCraft</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Главная
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Вики
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Скриншоты
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Форум
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Донат
              </a>
            </nav>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-primary/20 text-primary">
                <Icon
                  name="Circle"
                  size={8}
                  className="mr-1 fill-green-400 text-green-400"
                />
                354 игроков
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Лучший
                <span className="block text-primary">PvP Сервер</span>
                России
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                Соревнуйся с друзьями в захватывающих мини-играх. KitPvP,
                SkyWars, BedWars и многое другое!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Icon name="Play" size={20} className="mr-2" />
                  Играть сейчас
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border hover:bg-accent"
                >
                  <Icon name="Users" size={20} className="mr-2" />
                  Discord
                </Button>
              </div>
              <div className="flex items-center gap-8 mt-8 justify-center lg:justify-start">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">12K+</div>
                  <div className="text-sm text-muted-foreground">Игроков</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">8</div>
                  <div className="text-sm text-muted-foreground">Мини-игр</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Онлайн</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden border border-border/40">
                <img
                  src="/img/65ec471b-941b-4d8c-a8d7-72ac8e658a4d.jpg"
                  alt="Minecraft PvP Arena"
                  className="w-full h-auto pixelated"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-card/90 backdrop-blur-sm rounded-lg p-4 border border-border/40">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold">Арена PvP</div>
                        <div className="text-sm text-muted-foreground">
                          45 игроков в бою
                        </div>
                      </div>
                      <Icon name="Sword" size={24} className="text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mini Games Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Популярные мини-игры</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выбирай любимый режим и сражайся с игроками со всего мира
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card/50 border-border/40 hover:bg-card/80 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Zap" size={24} className="text-yellow-400" />
                    SkyWars
                  </CardTitle>
                  <Badge
                    variant="secondary"
                    className="bg-green-600/20 text-green-400"
                  >
                    <Icon
                      name="Circle"
                      size={8}
                      className="mr-1 fill-green-400 text-green-400"
                    />
                    124
                  </Badge>
                </div>
                <CardDescription>
                  Сражения на летающих островах в небе
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                    <Icon
                      name="Cloud"
                      size={48}
                      className="text-muted-foreground"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    <Icon name="Users" size={16} className="inline mr-1" />
                    8-16 игроков
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <Icon name="Clock" size={16} className="inline mr-1" />
                    5-10 мин
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border/40 hover:bg-card/80 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Home" size={24} className="text-red-400" />
                    BedWars
                  </CardTitle>
                  <Badge
                    variant="secondary"
                    className="bg-green-600/20 text-green-400"
                  >
                    <Icon
                      name="Circle"
                      size={8}
                      className="mr-1 fill-green-400 text-green-400"
                    />
                    89
                  </Badge>
                </div>
                <CardDescription>
                  Защищай свою кровать и уничтожай вражеские
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-red-600/20 to-orange-600/20 flex items-center justify-center">
                    <Icon
                      name="Shield"
                      size={48}
                      className="text-muted-foreground"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    <Icon name="Users" size={16} className="inline mr-1" />
                    4-8 игроков
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <Icon name="Clock" size={16} className="inline mr-1" />
                    10-20 мин
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border/40 hover:bg-card/80 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Sword" size={24} className="text-purple-400" />
                    KitPvP
                  </CardTitle>
                  <Badge
                    variant="secondary"
                    className="bg-green-600/20 text-green-400"
                  >
                    <Icon
                      name="Circle"
                      size={8}
                      className="mr-1 fill-green-400 text-green-400"
                    />
                    67
                  </Badge>
                </div>
                <CardDescription>
                  Выбери набор и сражайся на арене
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center">
                    <Icon
                      name="Swords"
                      size={48}
                      className="text-muted-foreground"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    <Icon name="Users" size={16} className="inline mr-1" />
                    Любое кол-во
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <Icon name="Clock" size={16} className="inline mr-1" />
                    Без лимита
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Последние новости</h2>
            <p className="text-xl text-muted-foreground">
              Следи за обновлениями и событиями сервера
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card/50 border-border/40 hover:bg-card/80 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge
                    variant="outline"
                    className="border-primary/40 text-primary"
                  >
                    Обновление
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    2 дня назад
                  </span>
                </div>
                <CardTitle className="text-lg">
                  Новый режим: Hunger Games
                </CardTitle>
                <CardDescription>
                  Выживай в жестокой битве на выживание с 24 игроками
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card/50 border-border/40 hover:bg-card/80 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge
                    variant="outline"
                    className="border-yellow-400/40 text-yellow-400"
                  >
                    Событие
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    1 неделю назад
                  </span>
                </div>
                <CardTitle className="text-lg">Турнир SkyWars</CardTitle>
                <CardDescription>
                  Прошел грандиозный турнир с призовым фондом 50,000 руб
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card/50 border-border/40 hover:bg-card/80 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge
                    variant="outline"
                    className="border-green-400/40 text-green-400"
                  >
                    Достижение
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    2 недели назад
                  </span>
                </div>
                <CardTitle className="text-lg">15,000 игроков!</CardTitle>
                <CardDescription>
                  Мы достигли нового рекорда по количеству зарегистрированных
                  игроков
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-card/30 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-primary rounded pixelated"></div>
                <span className="text-xl font-bold">CubeCraft</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Лучший PvP сервер Minecraft в России
              </p>
              <div className="flex gap-4">
                <Button size="sm" variant="outline">
                  <Icon name="MessageCircle" size={16} />
                </Button>
                <Button size="sm" variant="outline">
                  <Icon name="Youtube" size={16} />
                </Button>
                <Button size="sm" variant="outline">
                  <Icon name="Twitter" size={16} />
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Игра</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Скачать
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Правила
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Команды
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Статистика
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Сообщество</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Форум
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Discord
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    VK
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Донат
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Помощь
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Контакты
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Баги
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/40 pt-8 mt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 CubeCraft. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
