include CarrierWave
class SongUploader < CarrierWave::Uploader::Base
	storage :file

	def store_dir
		"#{Rails.root}/assets/music"
	end
end