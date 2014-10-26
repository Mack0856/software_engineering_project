Dir["#{Rails.root}/app/serializers/*.rb"].each {|file| require file }
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

  def home
    song_serializer = SongSerializer.new
    @serialized_songs = song_serializer.serialize(Song.all)
  end
end
