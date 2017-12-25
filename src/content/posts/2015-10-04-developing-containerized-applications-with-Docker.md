---
title: Developing Containerized Applications with Docker
subtitle: Notes from HEWeb2015 Technical Academy
author: Kevin D. Sherman
date: "2015-10-04"
tags: [heweb15]
---

These are notes from a talk by Laura Frank during the HighEdWeb 2015 Technology Academy. Laura works at CodeShip. 

https://github.com/rheinwein/rails-demo-apps

* Docker != containers
* Docker is a tool that managers containers
	* Build images to run as containers
	* Responsible for code execution
	* Con manage entire applications with docker-compose
	* Provision machines with docker-machine
	* docker-swarm: management for many machines
* A Container is a virtualization layer - sort of like a VM - but with some fundamental differences. 
* You can use Docker inside of other VMs
* Containers
	* Self-contained execution environment
	* Share the kernel of host system
	* Are isolated from other containers
	* Fast boot-times and low overhead
* This can seem complex, but they can greatly reduce the amount of time and space needed to run your application. When you close the container, everything is gone. 
* TL;DR: spend less time fight with dependencies, more time building what you want. 
* The Docker Ecosystem: Build, ship, run
* Docker Images: are images containers? No, an image is like a class and a container is an instance of that class
* The Docker Hub: repos of Docker Images, webhooks, build triggers, authentication, private repos. Web GUI or CLI
* Different Types of Images:
	* Service: self-contained service like PostgreSQL or MySQL
	* Project Base: intended to serve as a base of your own project. Does not directly provide a service, like Ruby, golang.
	* Official Image: maintained by the organization/company themselves (official Rails image)
* Build Your Own Docker Images
	* starts with a docker file
	* Docker Compose (yml)
	* Docker Toolbox
* How to get the containers to communicate with one another: linking, environmental variables, some additional configuration
* What about persistent data? Mounting directories/volumes; you can mount a special volume for databases. 
* Race conditions? Docker service could be up and tunning, but the service itself might not actually be available yet. Custom script to do a health check to see if it is available
* Docker in Production
	* Integrating with CI/CD
	* Can run tests, build new images, pushing that image to a registry, firing up containers with the new image
	* Some kind of orchestration tool should be doing this for you. (Kubernetes)


Peace<br>-- KS<br>Web Developer at Benedictine University near Chicago