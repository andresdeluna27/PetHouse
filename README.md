# PetHouse

== README


Things you may want to cover:

* Node version  >= 8.10
* npm version  >= 5.6
* also you will need to install docker on your computer
link: https://runnable.com/docker/install-docker-on-windows-10

* on the folder 'PetsPortal' install the react dependencies
	=> npm install

* Create the image for the docker container
	=> docker build -t animalfinal:v1 .
* Run the container with the composer doc
	=> docker-compose up
	
	now the backend is ready!
	
* To run the react app just type the command
	=> npm start
	
	No you can navigate for the aplication
	
**If you want to run at your local machine instead Docker you'll have to install the dependencies for the proyect and after that just run the code on visual studio
**You'll must change the port to 80 at the http calls on the reducer files: src/services/redux/animales/animal-action and src/services/redux/personas/persona-action

*/FALP

Please feel free to use a different markup language if you do not plan to run
<tt>rake doc:app</tt>.
