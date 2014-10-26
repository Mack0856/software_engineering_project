class SongUploader < CarrierWave::Uploader::Base
	storage :file

	def store_dir
		"#{Rails.root}/app/assets/images"
	end
end