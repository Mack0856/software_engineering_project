class HomeController < ApplicationController
  def index
  end

  def register
  	if request.post?
  		user = User.create(params[:user])
  		if user.persisted?
  			render :json, status: :ok
  		else
  			render :json, status: :unprocessable_entity
  		end
  	end
  end
end
