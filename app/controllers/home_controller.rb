Dir["#{Rails.root}/app/serializers/*.rb"].each {|file| require file }
require 'json'
class HomeController < ApplicationController
  def register
  	if request.post?
  		user = User.create(user_params)
  		if user.persisted?
        user.permissions = "basic"
        user.save!
        session[:user_id] = user.id
  			redirect_to home_path, notice: "You have successfully signed up!"
  		else
  			redirect_to '/', notice: "An error has occurred"
  		end
  	end
  end

  def home
    if session[:user_id]
    else
      redirect_to "/", notice: "Please log in"
    end
  end

  def logout
    reset_session
    render json: "", status: :ok
  end

  def subscribe
    user = User.find(params[:id])
    if user
      user.subscribed = true
      user.save
      render json: "", status: :ok
    end
  end

  def user_params
    params.permit(:first_name, :last_name, :email, :password, :date_of_birth, :gender)
  end
end
