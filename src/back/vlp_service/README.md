# Сервис "Построение VLP кривой"
Учебный сервис в рамках разработки тестового приложения школы "Айти в Нефти"

## Нативный запуск

Для запуска проекта требуется Python 3.11

1) Создайте виртуальное окружение
```bash
python -m venv venv
```
2) Активируйте его
чтобы оно автоматически подхватывалось
```bash
venv\Scripts\activate
```
3) Установите необходимые библиотеки
```bash
pip install -r requirements.txt
```
4) Запустите приложение
```bash
cd src
python -m main
```
## Запуск в Docker
1) Выполните команду:
```bash
docker-compose up
```

### Внимание!
Переменные:
* DEBUG - 0 запускает сервис в продуктивном режиме и требует соединения с сервисом PVT (переменная PVT_HOST)
* DEBUG - 1 запускает сервис в тестовом режиме и всегда возвращает один и тот же результат