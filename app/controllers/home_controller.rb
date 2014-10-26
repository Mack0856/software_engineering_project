Dir["#{Rails.root}/app/serializers/*.rb"].each {|file| require file }
require 'json'
class HomeController < ApplicationController
  def index
    render json: JSON.parse(Song.all)
  end

  def register
  	if request.post?
  		user = User.create(params[:user])
  		if user.persisted?
        session[:user_id] = user.id
  			render :json, status: :ok
  		else
  			render :json, status: :unprocessable_entity
  		end
  	end
  end

  def home
    if session[:user]
      song_serializer = SongSerializer.new
      @serialized_songs = song_serializer.serialize(Song.all).to_json
    else
      redirect_to :root
    end
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
