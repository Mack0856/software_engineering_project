class HomeController < ApplicationController
  def index
    render json: JSON.parse(Song.all)
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
