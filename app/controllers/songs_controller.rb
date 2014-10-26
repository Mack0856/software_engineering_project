class SongsController < ApplicationController
  before_filter :set_song, only: [:show, :edit, :update, :destroy, :download, :update_listens]
  before_filter :check_logged_in

  # GET /songs
  # GET /songs.json
  def index
    @songs = Song.all
  end

  # GET /songs/1
  # GET /songs/1.json
  def show
  end

  # GET /songs/new
  def new
    @song = Song.new
  end

  # GET /songs/1/edit
  def edit
  end

  # POST /songs
  # POST /songs.json
  def create
    @song = Song.new(song_params)

    respond_to do |format|
      if @song.save
        song_uploader = SongUploader.new
        song_uploader.store!(params[:song][:file])
        art_uploader = ArtUploader.new
        art_uploader.store!(params[:song][:art])
        @song.file = song_uploader.file
        @song.art = art_uploader.file
        @song.total_downloads = 0
        @song.total_plays = 0
        @song.save!
        format.html { redirect_to songs_path, notice: 'Song was successfully created.' }
      else
        format.html { redirect_to songs_path, notice: 'Some errors were found' }
      end
    end
  end

  def download
    if @song.total_downloads == nil
      @song.total_downloads = 0
    end
    @song.total_downloads += 1
    @song.last_download = Date.today
    @song.save!
    user = User.find(session[:user_id])
    if user
      if user.total_songs_downloaded == nil
        user.total_songs_downloaded = 0
      end
      user.total_songs_downloaded += 1
      user.save!
    end
    send_file @song.file.path, type: "mp3", x_sendfile: true
  end

  def update_listens
    if @song.total_plays == nil
      @song.total_plays = 0
    end
    @song.total_plays += 1
    @song.last_played = Date.today
    @song.save!
    user = User.find(session[:user_id])
    if user
      if user.total_songs_played == nil
        user.total_songs_played = 0
      end
      user.total_songs_played += 1
      user.save!
    end
    render json: "", status: :ok
  end

  # PATCH/PUT /songs/1
  # PATCH/PUT /songs/1.json
  def update
    respond_to do |format|
      if @song.update(song_params)
        song_uploader = SongUploader.new
        song_uploader.store!(params[:song][:file])
        art_uploader = ArtUploader.new
        art_uploader.store!(params[:song][:art])
        @song.file = song_uploader.file
        @song.art = art_uploader.file
        format.html { redirect_to @song, notice: 'Song was successfully updated.' }
        format.json { render :show, status: :ok, location: @song }
      else
        format.html { render :edit }
        format.json { render json: @song.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /songs/1
  # DELETE /songs/1.json
  def destroy
    @song.destroy
    respond_to do |format|
      format.html { redirect_to songs_url, notice: 'Song was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_song
      @song = Song.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def song_params
      params.require(:song).permit(:title, :artist, :album, :year, :genre, :last_played, :last_download, :total_plays, :total_downloads, :song_path)
    end

    def check_logged_in
      if session[:user_id]
        user = User.find(session[:user_id])
        unless user && user.permissions == "administrator"
          redirect_to '/', flash: { notice: "You are not authorized to access this page." }
        end
      else
        redirect_to '/', flash: { notice: "You are not logged in." }
      end
    end
end
