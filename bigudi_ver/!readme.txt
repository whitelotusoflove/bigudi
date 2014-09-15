Вообщем структура проекта такова:
css - все используемые стили;
fonts - шрифты;
img - дизайн элементы;
js - все js файлы;
node_modules - модули для grunt;
pic - картинки;
production - специальная папочка для сборки на сервер(gulp build);
src/components - туда качает bower;

Задачи grunt'a:
gulp w - следит за измениями в js,css и компилирует их.
gulp img - оптимизирует изображения в папках img и pic, и копирует их в production;
gulp css - конкатенирует,минифицирует css и копирует в production/build;
gulp less - компилирует less файлы;
gulp js - конкатенирует,минифицирует js и копирует в production/build;;
gulp html - подготавливает страницы к загрузке на сервер, и копирует их в production;
gulp build - делает всё выше перечисленное, а также копирует шрифты и файлы с расширениями ico,php,.htaccess,gif в папку production;
gulp - делает всё выше перечисленное, и остаётся следить за изменениями в файлах js,css,html;