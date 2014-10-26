Dir["#{Rails.root}/app/serializers/*.rb"].each {|file| require file }
require 'json'
class HomeController < ApplicationController
  def register
  	if request.post?
  		user = User.create(params[:user])
  		if user.persisted?
        # session[:user_id] = user.id
  			render :json, status: :ok
  		else
  			render :json, status: :unprocessable_entity
  		end
  	end
  end

  def home
  end

  def subscribe
    user = User.find(params[:id])
    if user
      user.subscribed = true
      user.save
      render :json, status: :ok
    end
  end
end
