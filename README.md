# Tripleten web_project_around

este proyecto se realizo con solo una mediaquery, ya que se trabajo con porsentajes y medidas responsivas para tener 2 versiones, mobil y pc, todo responsive y con animaciones mejoradas

el header se mueve con position: sticky; para hacer una animacion al bajar con scroll. por esto el logo y la linea estan por separado en header

cambie los valores para tener maximo 3 targetas por fila, sin embargo, con la anterior configuracion, al tener la pantalla en 1270px se tenian 3 targetas y si se contaba con mas espacio cambiaba a 4 y si se disminulle cambiaban a 2, esto sin usar mediaquerys.

el boton guardar tambien cierra el popup y agrege un fondo difuso al abrir el popup.

en este proyecto no utilizamos handleEscClose() ya que se uso dialog y su funcionamiento automatico realiza esa accion, de igual forma omiti el boton x para cerrar los dialogs ya que tambien tienen una funcionalidad para hacerlo automaticamente, sin embargo se me hizo mas estetico quitarlo y solo usar wsc y click fuera de dialog.
