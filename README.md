software_engineering_project
============================

Setting up your development environment
============================
1. Download Vagrant for windows, Oracle VirtualBox(4.3.12) and your preferred SSH client.
2. Set up your path environment variable to include vagrant and virtualbox if it hasn't so already.
   - Vagrant (Your Installation Path)/bin
   - Virtual Box (Your Installation Path)
3. Create a new folder where you intend to do development and navigate to the folder using command prompt.
   - I used C:\Projects
4. While in that folder in command prompt, create a new vagrant box by running the following command:
   - vagrant add box (box name) - I used precise64, a lightweight ubuntu box.
5. Open VirtualBox, it needs to be running in the background in order to utilize this newly created box.
6. Initialize the box by running 'vagrant init (box name)'
7. Finally, start the vagrant box by running 'vagrant up'.
   - To test that everything has been set up correctly, ssh into the new vagrant box.
   - IP address: 127.0.0.1
   - Port: 2222
   - Username: vagrant
   - Password: vagrant
8. You will now need to install all the dependencies required to develop.
   - Copy the following lines into the ssh instance running:

sudo apt-get update

sudo apt-get install build-essential zlib1g-dev git-core sqlite3 libsqlite3-dev

cd

git clone git://github.com/sstephenson/rbenv.git .rbenv

echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bash_profile

echo 'eval "$(rbenv init -)"' >> ~/.bash_profile

source .bash_profile

git clone https://github.com/sstephenson/ruby-build.git

cd ruby-build

sudo ./install.sh

rbenv install 2.0.0-p247

rbenv global 2.0.0-p247

cd /vagrant/

gem install bundler

9. Create a new projects folder within the vagrant folder located in root.
10. Clone the repo into your newly created folder. git clone https://github.com/Mack0856/software_engineering_project.git
10. Download and install rails: gem install rails
11. Navigate into the newly cloned directory and run 'bundle'
12. Start the rails server by running 'rails s'
13. To access the files shared between your vagrant box and windows, navigate to the directory where you created your new vagrant box and within the folders, you should be able to access the repo. You can then edit the files in windows with your favorite IDE and this will be updated in the vagrant box.
