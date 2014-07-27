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
   - Copy the following lines into the ssh instance running:\n
sudo apt-get update\n
sudo apt-get install build-essential zlib1g-dev git-core sqlite3 libsqlite3-dev\n
cd\n
git clone git://github.com/sstephenson/rbenv.git .rbenv\n
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bash_profile\n
echo 'eval "$(rbenv init -)"' >> ~/.bash_profile\n
source .bash_profile\n
git clone https://github.com/sstephenson/ruby-build.git\n
cd ruby-build\n
sudo ./install.sh\n
rbenv install 2.0.0-p247\n
rbenv global 2.0.0-p247\n
cd /vagrant/\n
gem install bundler\n
9. Create a new projects folder within the vagrant folder located in root.
10. Clone the repo into your newly created folder. git clone https://github.com/Mack0856/software_engineering_project.git
10. Download and install rails: gem install rails
11. Navigate into the newly cloned directory and run 'bundle'
12. Start the rails server by running 'rails s'
