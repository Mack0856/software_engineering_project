class Song < ActiveRecord::Base
	mount_uploader :file, SongUploader
	mount_uploader :art, ArtUploader
end
