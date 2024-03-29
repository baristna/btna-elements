/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'error': '&#xe900;',
		'error_outline': '&#xe901;',
		'warningreport_problem': '&#xe902;',
		'add_alert': '&#xe903;',
		'notification_important': '&#xe904;',
		'album': '&#xe905;',
		'av_timer': '&#xe906;',
		'closed_caption': '&#xe907;',
		'equalizer': '&#xe908;',
		'explicit': '&#xe909;',
		'fast_forward': '&#xe90a;',
		'fast_rewind': '&#xe90b;',
		'gamesgamepad': '&#xe90c;',
		'hearing': '&#xe90d;',
		'high_quality': '&#xe90e;',
		'loopsync': '&#xe90f;',
		'mic': '&#xe910;',
		'mic_none': '&#xe911;',
		'mic_off': '&#xe912;',
		'moviemovie_creation': '&#xe913;',
		'library_addqueueadd_to_photos': '&#xe914;',
		'library_books': '&#xe915;',
		'library_music': '&#xe916;',
		'new_releases': '&#xe917;',
		'not_interesteddo_not_disturb': '&#xe918;',
		'pause': '&#xe919;',
		'pause_circle_filled': '&#xe91a;',
		'pause_circle_outline': '&#xe91b;',
		'play_arrow': '&#xe91c;',
		'play_circle_filled': '&#xe91d;',
		'play_circle_outline': '&#xe91e;',
		'playlist_add': '&#xe91f;',
		'queue_music': '&#xe920;',
		'radio': '&#xe921;',
		'recent_actors': '&#xe922;',
		'repeat': '&#xe923;',
		'repeat_one': '&#xe924;',
		'replay': '&#xe925;',
		'shuffle': '&#xe926;',
		'skip_next': '&#xe927;',
		'skip_previous': '&#xe928;',
		'snooze': '&#xe929;',
		'stop': '&#xe92a;',
		'subtitles': '&#xe92b;',
		'surround_sound': '&#xe92c;',
		'video_collection': '&#xe92d;',
		'videocam': '&#xe92e;',
		'videocam_off': '&#xe92f;',
		'volume_down': '&#xe930;',
		'volume_mute': '&#xe931;',
		'volume_off': '&#xe932;',
		'volume_up': '&#xe933;',
		'web': '&#xe934;',
		'hd': '&#xe935;',
		'sort_by_alpha': '&#xe936;',
		'airplay': '&#xe937;',
		'forward_10': '&#xe938;',
		'forward_30': '&#xe939;',
		'forward_5': '&#xe93a;',
		'replay_10': '&#xe93b;',
		'replay_30': '&#xe93c;',
		'replay_5': '&#xe93d;',
		'add_to_queue': '&#xe93e;',
		'fiber_dvr': '&#xe93f;',
		'fiber_new': '&#xe940;',
		'playlist_play': '&#xe941;',
		'art_track': '&#xe942;',
		'fiber_manual_record': '&#xe943;',
		'fiber_smart_record': '&#xe944;',
		'music_video': '&#xe945;',
		'subscriptions': '&#xe946;',
		'playlist_add_check': '&#xe947;',
		'queue_play_next': '&#xe948;',
		'remove_from_queue': '&#xe949;',
		'slow_motion_video': '&#xe94a;',
		'web_asset': '&#xe94b;',
		'fiber_pin': '&#xe94c;',
		'branding_watermark': '&#xe94d;',
		'call_to_action': '&#xe94e;',
		'featured_play_list': '&#xe94f;',
		'featured_video': '&#xe950;',
		'note': '&#xe951;',
		'video_call': '&#xe952;',
		'video_label': '&#xe953;',
		'4k': '&#xe954;',
		'missed_video_call': '&#xe955;',
		'control_camera': '&#xe956;',
		'businessdomain': '&#xe957;',
		'call': '&#xe958;',
		'call_end': '&#xe959;',
		'call_made': '&#xe95a;',
		'call_mergemerge_type': '&#xe95b;',
		'call_missed': '&#xe95c;',
		'call_received': '&#xe95d;',
		'call_split': '&#xe95e;',
		'chat': '&#xe95f;',
		'clear_all': '&#xe960;',
		'comment': '&#xe961;',
		'contacts': '&#xe962;',
		'dialer_sip': '&#xe963;',
		'dialpad': '&#xe964;',
		'emailmailmarkunreadlocal_post_office': '&#xe965;',
		'forumquestion_answer': '&#xe966;',
		'import_export': '&#xe967;',
		'invert_colors_off': '&#xe968;',
		'live_help': '&#xe969;',
		'location_off': '&#xe96a;',
		'location_onplaceroom': '&#xe96b;',
		'message': '&#xe96c;',
		'chat_bubble': '&#xe96d;',
		'chat_bubble_outline': '&#xe96e;',
		'no_simsignal_cellular_no_sim': '&#xe96f;',
		'phonelocal_phone': '&#xe970;',
		'portable_wifi_off': '&#xe971;',
		'contact_phone': '&#xe972;',
		'contact_mail': '&#xe973;',
		'ring_volume': '&#xe974;',
		'speaker_phone': '&#xe975;',
		'stay_current_landscapestay_primary_landscape': '&#xe976;',
		'stay_current_portraitstay_primary_portraitsmartphone': '&#xe977;',
		'swap_calls': '&#xe978;',
		'textsmssms': '&#xe979;',
		'voicemail': '&#xe97a;',
		'vpn_key': '&#xe97b;',
		'phonelink_erase': '&#xe97c;',
		'phonelink_lock': '&#xe97d;',
		'phonelink_ring': '&#xe97e;',
		'phonelink_setup': '&#xe97f;',
		'present_to_all': '&#xe980;',
		'import_contacts': '&#xe981;',
		'mail_outline': '&#xe982;',
		'screen_share': '&#xe983;',
		'stop_screen_share': '&#xe984;',
		'call_missed_outgoing': '&#xe985;',
		'rss_feed': '&#xe986;',
		'alternate_email': '&#xe987;',
		'mobile_screen_share': '&#xe988;',
		'add_call': '&#xe989;',
		'cancel_presentation': '&#xe98a;',
		'pause_presentation': '&#xe98b;',
		'unsubscribe': '&#xe98c;',
		'cell_wifi': '&#xe98d;',
		'sentiment_satisfied_alt': '&#xe98e;',
		'list_alt': '&#xe98f;',
		'domain_disabled': '&#xe990;',
		'lightbulb': '&#xe991;',
		'add': '&#xe992;',
		'add_box': '&#xe993;',
		'add_circle': '&#xe994;',
		'add_circle_outlinecontrol_point': '&#xe995;',
		'archive': '&#xe996;',
		'backspace': '&#xe997;',
		'block': '&#xe998;',
		'clearclose': '&#xe999;',
		'content_copy': '&#xe99a;',
		'content_cut': '&#xe99b;',
		'content_paste': '&#xe99c;',
		'createmode_editedit': '&#xe99d;',
		'drafts': '&#xe99e;',
		'filter_list': '&#xe99f;',
		'flagassistant_photo': '&#xe9a0;',
		'forward': '&#xe9a1;',
		'gesture': '&#xe9a2;',
		'inbox': '&#xe9a3;',
		'linkinsert_link': '&#xe9a4;',
		'redo': '&#xe9a5;',
		'remove': '&#xe9a6;',
		'remove_circledo_not_disturb_on': '&#xe9a7;',
		'remove_circle_outline': '&#xe9a8;',
		'reply': '&#xe9a9;',
		'reply_all': '&#xe9aa;',
		'report': '&#xe9ab;',
		'save': '&#xe9ac;',
		'select_all': '&#xe9ad;',
		'send': '&#xe9ae;',
		'sort': '&#xe9af;',
		'text_format': '&#xe9b0;',
		'undo': '&#xe9b1;',
		'font_download': '&#xe9b2;',
		'move_to_inbox': '&#xe9b3;',
		'unarchive': '&#xe9b4;',
		'next_week': '&#xe9b5;',
		'weekend': '&#xe9b6;',
		'delete_sweep': '&#xe9b7;',
		'low_priority': '&#xe9b8;',
		'outlined_flag': '&#xe9b9;',
		'link_off': '&#xe9ba;',
		'report_off': '&#xe9bb;',
		'save_alt': '&#xe9bc;',
		'ballot': '&#xe9bd;',
		'file_copy': '&#xe9be;',
		'how_to_reg': '&#xe9bf;',
		'how_to_vote': '&#xe9c0;',
		'waves': '&#xe9c1;',
		'where_to_vote': '&#xe9c2;',
		'add_link': '&#xe9c3;',
		'inventory': '&#xe9c4;',
		'access_alarmalarm': '&#xe9c5;',
		'access_alarms': '&#xe9c6;',
		'access_timequery_builderschedule': '&#xe9c7;',
		'add_alarmalarm_add': '&#xe9c8;',
		'airplanemode_inactive': '&#xe9c9;',
		'airplanemode_activeflightlocal_airport': '&#xe9ca;',
		'battery_alert': '&#xe9cb;',
		'battery_charging_full': '&#xe9cc;',
		'battery_fullbattery_std': '&#xe9cd;',
		'battery_unknown': '&#xe9ce;',
		'bluetooth': '&#xe9cf;',
		'bluetooth_connected': '&#xe9d0;',
		'bluetooth_disabled': '&#xe9d1;',
		'bluetooth_searchingbluetooth_audio': '&#xe9d2;',
		'brightness_auto': '&#xe9d3;',
		'brightness_highbrightness_7': '&#xe9d4;',
		'brightness_lowbrightness_5': '&#xe9d5;',
		'brightness_mediumbrightness_6': '&#xe9d6;',
		'data_usage': '&#xe9d7;',
		'developer_mode': '&#xe9d8;',
		'devicesphonelink': '&#xe9d9;',
		'dvr': '&#xe9da;',
		'gps_fixedmy_location': '&#xe9db;',
		'gps_not_fixedlocation_searching': '&#xe9dc;',
		'gps_offlocation_disabled': '&#xe9dd;',
		'graphic_eq': '&#xe9de;',
		'network_cell': '&#xe9df;',
		'network_wifi': '&#xe9e0;',
		'nfc': '&#xe9e1;',
		'now_wallpaper': '&#xe9e2;',
		'now_widgets': '&#xe9e3;',
		'screen_lock_landscape': '&#xe9e4;',
		'screen_lock_portrait': '&#xe9e5;',
		'screen_lock_rotation': '&#xe9e6;',
		'screen_rotation': '&#xe9e7;',
		'sd_storagesd_card': '&#xe9e8;',
		'settings_system_daydream': '&#xe9e9;',
		'signal_cellular_4_bar': '&#xe9ea;',
		'signal_cellular_connected_no_internet_4_bar': '&#xe9eb;',
		'signal_cellular_null': '&#xe9ec;',
		'signal_cellular_off': '&#xe9ed;',
		'signal_wifi_4_bar': '&#xe9ee;',
		'signal_wifi_4_bar_lock': '&#xe9ef;',
		'signal_wifi_off': '&#xe9f0;',
		'storage': '&#xe9f1;',
		'usb': '&#xe9f2;',
		'wifi_lock': '&#xe9f3;',
		'wifi_tethering': '&#xe9f4;',
		'add_to_home_screen': '&#xe9f5;',
		'device_thermostat': '&#xe9f6;',
		'mobile_friendly': '&#xe9f7;',
		'mobile_off': '&#xe9f8;',
		'signal_cellular_alt': '&#xe9f9;',
		'attach_file': '&#xe9fa;',
		'attach_money': '&#xe9fb;',
		'border_all': '&#xe9fc;',
		'border_bottom': '&#xe9fd;',
		'border_clear': '&#xe9fe;',
		'border_color': '&#xe9ff;',
		'border_horizontal': '&#xea00;',
		'border_inner': '&#xea01;',
		'border_left': '&#xea02;',
		'border_outer': '&#xea03;',
		'border_right': '&#xea04;',
		'border_style': '&#xea05;',
		'border_top': '&#xea06;',
		'border_vertical': '&#xea07;',
		'format_align_center': '&#xea08;',
		'format_align_justify': '&#xea09;',
		'format_align_left': '&#xea0a;',
		'format_align_right': '&#xea0b;',
		'format_bold': '&#xea0c;',
		'format_clear': '&#xea0d;',
		'format_color_fill': '&#xea0e;',
		'format_color_reset': '&#xea0f;',
		'format_color_text': '&#xea10;',
		'format_indent_decrease': '&#xea11;',
		'format_indent_increase': '&#xea12;',
		'format_italic': '&#xea13;',
		'format_line_spacing': '&#xea14;',
		'format_list_bulleted': '&#xea15;',
		'format_list_numbered': '&#xea16;',
		'format_paint': '&#xea17;',
		'format_quote': '&#xea18;',
		'format_size': '&#xea19;',
		'format_strikethrough': '&#xea1a;',
		'format_textdirection_l_to_r': '&#xea1b;',
		'format_textdirection_r_to_l': '&#xea1c;',
		'format_underlined': '&#xea1d;',
		'functions': '&#xea1e;',
		'insert_chartpollassessment': '&#xea1f;',
		'insert_comment': '&#xea20;',
		'insert_drive_file': '&#xea21;',
		'insert_emoticontag_facesmood': '&#xea22;',
		'insert_invitationevent': '&#xea23;',
		'insert_photoimagephoto': '&#xea24;',
		'mode_comment': '&#xea25;',
		'publish': '&#xea26;',
		'space_bar': '&#xea27;',
		'strikethrough_s': '&#xea28;',
		'vertical_align_bottom': '&#xea29;',
		'vertical_align_center': '&#xea2a;',
		'vertical_align_top': '&#xea2b;',
		'wrap_text': '&#xea2c;',
		'money_off': '&#xea2d;',
		'drag_handle': '&#xea2e;',
		'format_shapes': '&#xea2f;',
		'highlight': '&#xea30;',
		'linear_scale': '&#xea31;',
		'short_text': '&#xea32;',
		'text_fields': '&#xea33;',
		'monetization_on': '&#xea34;',
		'title': '&#xea35;',
		'table_chart': '&#xea36;',
		'add_comment': '&#xea37;',
		'format_list_numbered_rtl': '&#xea38;',
		'scatter_plot': '&#xea39;',
		'score': '&#xea3a;',
		'insert_chart_outlined': '&#xea3b;',
		'bar_chart': '&#xea3c;',
		'notes': '&#xea3d;',
		'attachment': '&#xea3e;',
		'cloud': '&#xea3f;',
		'cloud_circle': '&#xea40;',
		'cloud_done': '&#xea41;',
		'cloud_download': '&#xea42;',
		'cloud_off': '&#xea43;',
		'cloud_queue': '&#xea44;',
		'cloud_uploadbackup': '&#xea45;',
		'file_downloadget_app': '&#xea46;',
		'file_upload': '&#xea47;',
		'folder': '&#xea48;',
		'folder_open': '&#xea49;',
		'folder_shared': '&#xea4a;',
		'create_new_folder': '&#xea4b;',
		'cast': '&#xea4c;',
		'cast_connected': '&#xea4d;',
		'computerlaptop': '&#xea4e;',
		'desktop_mac': '&#xea4f;',
		'desktop_windows': '&#xea50;',
		'developer_board': '&#xea51;',
		'dock': '&#xea52;',
		'headset': '&#xea53;',
		'headset_mic': '&#xea54;',
		'keyboard': '&#xea55;',
		'keyboard_arrow_down': '&#xea56;',
		'keyboard_arrow_left': '&#xea57;',
		'keyboard_arrow_right': '&#xea58;',
		'keyboard_arrow_up': '&#xea59;',
		'keyboard_backspace': '&#xea5a;',
		'keyboard_capslock': '&#xea5b;',
		'keyboard_hide': '&#xea5c;',
		'keyboard_return': '&#xea5d;',
		'keyboard_tab': '&#xea5e;',
		'keyboard_voice': '&#xea5f;',
		'laptop_chromebook': '&#xea60;',
		'laptop_mac': '&#xea61;',
		'laptop_windows': '&#xea62;',
		'memory': '&#xea63;',
		'mouse': '&#xea64;',
		'phone_android': '&#xea65;',
		'phone_iphone': '&#xea66;',
		'phonelink_off': '&#xea67;',
		'router': '&#xea68;',
		'scanner': '&#xea69;',
		'security': '&#xea6a;',
		'sim_card': '&#xea6b;',
		'speaker': '&#xea6c;',
		'speaker_group': '&#xea6d;',
		'tablet': '&#xea6e;',
		'tablet_android': '&#xea6f;',
		'tablet_mac': '&#xea70;',
		'toys': '&#xea71;',
		'tv': '&#xea72;',
		'watch': '&#xea73;',
		'device_hub': '&#xea74;',
		'power_input': '&#xea75;',
		'devices_other': '&#xea76;',
		'videogame_asset': '&#xea77;',
		'device_unknown': '&#xea78;',
		'headset_off': '&#xea79;',
		'adjust': '&#xea7a;',
		'assistant': '&#xea7b;',
		'audiotrack': '&#xea7c;',
		'blur_circular': '&#xea7d;',
		'blur_linear': '&#xea7e;',
		'blur_off': '&#xea7f;',
		'blur_on': '&#xea80;',
		'brightness_1': '&#xea81;',
		'brightness_2': '&#xea82;',
		'brightness_3': '&#xea83;',
		'brightness_4': '&#xea84;',
		'broken_image': '&#xea85;',
		'brush': '&#xea86;',
		'camera': '&#xea87;',
		'camera_altphoto_cameralocal_see': '&#xea88;',
		'camera_front': '&#xea89;',
		'camera_rear': '&#xea8a;',
		'camera_roll': '&#xea8b;',
		'center_focus_strong': '&#xea8c;',
		'center_focus_weak': '&#xea8d;',
		'collectionsphoto_library': '&#xea8e;',
		'color_lenspalette': '&#xea8f;',
		'colorize': '&#xea90;',
		'compare': '&#xea91;',
		'control_point_duplicate': '&#xea92;',
		'crop_16_9': '&#xea93;',
		'crop_3_2': '&#xea94;',
		'crop': '&#xea95;',
		'crop_5_4crop_landscape': '&#xea96;',
		'crop_7_5': '&#xea97;',
		'crop_din': '&#xea98;',
		'crop_free': '&#xea99;',
		'crop_original': '&#xea9a;',
		'crop_portrait': '&#xea9b;',
		'crop_square': '&#xea9c;',
		'dehaze': '&#xea9d;',
		'details': '&#xea9e;',
		'exposure': '&#xea9f;',
		'exposure_minus_1': '&#xeaa0;',
		'exposure_minus_2': '&#xeaa1;',
		'exposure_plus_1': '&#xeaa2;',
		'exposure_plus_2': '&#xeaa3;',
		'exposure_zero': '&#xeaa4;',
		'filter_1': '&#xeaa5;',
		'filter_2': '&#xeaa6;',
		'filter_3': '&#xeaa7;',
		'filter': '&#xeaa8;',
		'filter_4': '&#xeaa9;',
		'filter_5': '&#xeaaa;',
		'filter_6': '&#xeaab;',
		'filter_7': '&#xeaac;',
		'filter_8': '&#xeaad;',
		'filter_9': '&#xeaae;',
		'filter_9_plus': '&#xeaaf;',
		'filter_b_and_w': '&#xeab0;',
		'filter_center_focus': '&#xeab1;',
		'filter_drama': '&#xeab2;',
		'filter_frames': '&#xeab3;',
		'filter_hdrlandscapeterrain': '&#xeab4;',
		'filter_none': '&#xeab5;',
		'filter_tilt_shift': '&#xeab6;',
		'filter_vintage': '&#xeab7;',
		'flare': '&#xeab8;',
		'flash_auto': '&#xeab9;',
		'flash_off': '&#xeaba;',
		'flash_on': '&#xeabb;',
		'flip': '&#xeabc;',
		'gradient': '&#xeabd;',
		'grain': '&#xeabe;',
		'grid_off': '&#xeabf;',
		'grid_on': '&#xeac0;',
		'hdr_off': '&#xeac1;',
		'hdr_on': '&#xeac2;',
		'hdr_strong': '&#xeac3;',
		'hdr_weak': '&#xeac4;',
		'healing': '&#xeac5;',
		'image_aspect_ratio': '&#xeac6;',
		'iso': '&#xeac7;',
		'leak_add': '&#xeac8;',
		'leak_remove': '&#xeac9;',
		'lens': '&#xeaca;',
		'looks_3': '&#xeacb;',
		'looks': '&#xeacc;',
		'looks_4': '&#xeacd;',
		'looks_5': '&#xeace;',
		'looks_6': '&#xeacf;',
		'looks_one': '&#xead0;',
		'looks_two': '&#xead1;',
		'loupe': '&#xead2;',
		'monochrome_photos': '&#xead3;',
		'music_note': '&#xead4;',
		'nature': '&#xead5;',
		'nature_people': '&#xead6;',
		'navigate_beforechevron_left': '&#xead7;',
		'navigate_nextchevron_right': '&#xead8;',
		'panorama': '&#xead9;',
		'panorama_fish_eyeradio_button_unchecked': '&#xeada;',
		'panorama_horizontal': '&#xeadb;',
		'panorama_vertical': '&#xeadc;',
		'panorama_wide_angle': '&#xeadd;',
		'photo_album': '&#xeade;',
		'picture_as_pdf': '&#xeadf;',
		'portrait': '&#xeae0;',
		'remove_red_eyevisibility': '&#xeae1;',
		'rotate_90_degrees_ccw': '&#xeae2;',
		'rotate_left': '&#xeae3;',
		'rotate_right': '&#xeae4;',
		'slideshow': '&#xeae5;',
		'straighten': '&#xeae6;',
		'style': '&#xeae7;',
		'switch_camera': '&#xeae8;',
		'switch_video': '&#xeae9;',
		'texture': '&#xeaea;',
		'timelapse': '&#xeaeb;',
		'timer_10': '&#xeaec;',
		'timer_3': '&#xeaed;',
		'timer': '&#xeaee;',
		'timer_off': '&#xeaef;',
		'tonality': '&#xeaf0;',
		'transform': '&#xeaf1;',
		'tune': '&#xeaf2;',
		'view_comfortable': '&#xeaf3;',
		'view_compact': '&#xeaf4;',
		'wb_auto': '&#xeaf5;',
		'wb_cloudy': '&#xeaf6;',
		'wb_incandescent': '&#xeaf7;',
		'wb_sunny': '&#xeaf8;',
		'collections_bookmark': '&#xeaf9;',
		'photo_size_select_actual': '&#xeafa;',
		'photo_size_select_large': '&#xeafb;',
		'photo_size_select_small': '&#xeafc;',
		'vignette': '&#xeafd;',
		'wb_iridescent': '&#xeafe;',
		'crop_rotate': '&#xeaff;',
		'linked_camera': '&#xeb00;',
		'add_a_photo': '&#xeb01;',
		'movie_filter': '&#xeb02;',
		'photo_filter': '&#xeb03;',
		'burst_mode': '&#xeb04;',
		'shutter_speed': '&#xeb05;',
		'add_photo_alternate': '&#xeb06;',
		'image_search': '&#xeb07;',
		'music_off': '&#xeb08;',
		'beenhere': '&#xeb09;',
		'directions': '&#xeb0a;',
		'directions_bike': '&#xeb0b;',
		'directions_bus': '&#xeb0c;',
		'directions_car': '&#xeb0d;',
		'directions_ferry': '&#xeb0e;',
		'directions_subwaydirections_transit': '&#xeb0f;',
		'directions_railway': '&#xeb10;',
		'directions_walk': '&#xeb11;',
		'hotellocal_hotel': '&#xeb12;',
		'layers': '&#xeb13;',
		'layers_clear': '&#xeb14;',
		'local_atm': '&#xeb15;',
		'local_attractionlocal_play': '&#xeb16;',
		'local_bar': '&#xeb17;',
		'local_cafefree_breakfast': '&#xeb18;',
		'local_car_wash': '&#xeb19;',
		'local_convenience_store': '&#xeb1a;',
		'local_drink': '&#xeb1b;',
		'local_florist': '&#xeb1c;',
		'local_gas_station': '&#xeb1d;',
		'local_grocery_storeshopping_cart': '&#xeb1e;',
		'local_hospital': '&#xeb1f;',
		'local_laundry_service': '&#xeb20;',
		'local_library': '&#xeb21;',
		'local_mall': '&#xeb22;',
		'local_moviestheaters': '&#xeb23;',
		'local_offer': '&#xeb24;',
		'local_parking': '&#xeb25;',
		'local_pharmacy': '&#xeb26;',
		'local_pizza': '&#xeb27;',
		'local_print_shopprint': '&#xeb28;',
		'local_restaurantrestaurant_menu': '&#xeb29;',
		'local_shipping': '&#xeb2a;',
		'local_taxi': '&#xeb2b;',
		'location_history': '&#xeb2c;',
		'map': '&#xeb2d;',
		'navigation': '&#xeb2e;',
		'pin_drop': '&#xeb2f;',
		'rate_review': '&#xeb30;',
		'satellite': '&#xeb31;',
		'store_mall_directorystore': '&#xeb32;',
		'traffic': '&#xeb33;',
		'directions_run': '&#xeb34;',
		'add_location': '&#xeb35;',
		'edit_location': '&#xeb36;',
		'near_me': '&#xeb37;',
		'person_pin_circle': '&#xeb38;',
		'zoom_out_map': '&#xeb39;',
		'restaurant': '&#xeb3a;',
		'ev_station': '&#xeb3b;',
		'streetview': '&#xeb3c;',
		'subway': '&#xeb3d;',
		'train': '&#xeb3e;',
		'tram': '&#xeb3f;',
		'transfer_within_a_station': '&#xeb40;',
		'atm': '&#xeb41;',
		'category': '&#xeb42;',
		'not_listed_location': '&#xeb43;',
		'departure_board': '&#xeb44;',
		'360': '&#xeb45;',
		'edit_attributes': '&#xeb46;',
		'transit_enterexit': '&#xeb47;',
		'fastfood': '&#xeb48;',
		'trip_origin': '&#xeb49;',
		'compass_calibration': '&#xeb4a;',
		'money': '&#xeb4b;',
		'apps': '&#xeb4c;',
		'arrow_back': '&#xeb4d;',
		'arrow_drop_down': '&#xeb4e;',
		'arrow_drop_down_circle': '&#xeb4f;',
		'arrow_drop_up': '&#xeb50;',
		'arrow_forward': '&#xeb51;',
		'cancel': '&#xeb52;',
		'check': '&#xeb53;',
		'expand_less': '&#xeb54;',
		'expand_more': '&#xeb55;',
		'fullscreen': '&#xeb56;',
		'fullscreen_exit': '&#xeb57;',
		'menu': '&#xeb58;',
		'keyboard_control': '&#xeb59;',
		'more_vert': '&#xeb5a;',
		'refresh': '&#xeb5b;',
		'unfold_less': '&#xeb5c;',
		'unfold_more': '&#xeb5d;',
		'arrow_upward': '&#xeb5e;',
		'subdirectory_arrow_left': '&#xeb5f;',
		'subdirectory_arrow_right': '&#xeb60;',
		'arrow_downward': '&#xeb61;',
		'first_page': '&#xeb62;',
		'last_page': '&#xeb63;',
		'arrow_left': '&#xeb64;',
		'arrow_right': '&#xeb65;',
		'arrow_back_ios': '&#xeb66;',
		'arrow_forward_ios': '&#xeb67;',
		'adb': '&#xeb68;',
		'disc_full': '&#xeb69;',
		'do_not_disturb_alt': '&#xeb6a;',
		'drive_etatime_to_leave': '&#xeb6b;',
		'event_available': '&#xeb6c;',
		'event_busy': '&#xeb6d;',
		'event_note': '&#xeb6e;',
		'folder_special': '&#xeb6f;',
		'mms': '&#xeb70;',
		'more': '&#xeb71;',
		'network_locked': '&#xeb72;',
		'phone_bluetooth_speaker': '&#xeb73;',
		'phone_forwarded': '&#xeb74;',
		'phone_in_talk': '&#xeb75;',
		'phone_locked': '&#xeb76;',
		'phone_missed': '&#xeb77;',
		'phone_paused': '&#xeb78;',
		'sim_card_alert': '&#xeb79;',
		'sms_failedfeedback': '&#xeb7a;',
		'sync_disabled': '&#xeb7b;',
		'sync_problem': '&#xeb7c;',
		'system_update': '&#xeb7d;',
		'tap_and_play': '&#xeb7e;',
		'vibration': '&#xeb7f;',
		'voice_chat': '&#xeb80;',
		'vpn_lock': '&#xeb81;',
		'airline_seat_flat': '&#xeb82;',
		'airline_seat_flat_angled': '&#xeb83;',
		'airline_seat_individual_suite': '&#xeb84;',
		'airline_seat_legroom_extra': '&#xeb85;',
		'airline_seat_legroom_normal': '&#xeb86;',
		'airline_seat_legroom_reduced': '&#xeb87;',
		'airline_seat_recline_extra': '&#xeb88;',
		'airline_seat_recline_normal': '&#xeb89;',
		'confirmation_number': '&#xeb8a;',
		'live_tv': '&#xeb8b;',
		'ondemand_video': '&#xeb8c;',
		'personal_video': '&#xeb8d;',
		'power': '&#xeb8e;',
		'wc': '&#xeb8f;',
		'wifi': '&#xeb90;',
		'enhanced_encryption': '&#xeb91;',
		'network_check': '&#xeb92;',
		'no_encryption': '&#xeb93;',
		'rv_hookup': '&#xeb94;',
		'do_not_disturb_off': '&#xeb95;',
		'priority_high': '&#xeb96;',
		'power_off': '&#xeb97;',
		'tv_off': '&#xeb98;',
		'wifi_off': '&#xeb99;',
		'phone_callback': '&#xeb9a;',
		'pie_chart': '&#xeb9b;',
		'pie_chart_outlined': '&#xeb9c;',
		'bubble_chart': '&#xeb9d;',
		'multiline_chart': '&#xeb9e;',
		'show_chart': '&#xeb9f;',
		'cake': '&#xeba0;',
		'grouppeople': '&#xeba1;',
		'group_add': '&#xeba2;',
		'location_city': '&#xeba3;',
		'mood_bad': '&#xeba4;',
		'notifications': '&#xeba5;',
		'notifications_none': '&#xeba6;',
		'notifications_off': '&#xeba7;',
		'notifications_active': '&#xeba8;',
		'notifications_paused': '&#xeba9;',
		'pages': '&#xebaa;',
		'party_mode': '&#xebab;',
		'people_outline': '&#xebac;',
		'person': '&#xebad;',
		'person_add': '&#xebae;',
		'person_outlineperm_identity': '&#xebaf;',
		'plus_one': '&#xebb0;',
		'public': '&#xebb1;',
		'school': '&#xebb2;',
		'share': '&#xebb3;',
		'whatshot': '&#xebb4;',
		'sentiment_dissatisfied': '&#xebb5;',
		'sentiment_neutral': '&#xebb6;',
		'sentiment_satisfied': '&#xebb7;',
		'sentiment_very_dissatisfied': '&#xebb8;',
		'sentiment_very_satisfied': '&#xebb9;',
		'thumb_down_alt': '&#xebba;',
		'thumb_up_alt': '&#xebbb;',
		'check_box': '&#xebbc;',
		'check_box_outline_blank': '&#xebbd;',
		'radio_button_checked': '&#xebbe;',
		'stargrade': '&#xebbf;',
		'star_half': '&#xebc0;',
		'star_outline': '&#xebc1;',
		'3d_rotation': '&#xebc2;',
		'accessibility': '&#xebc3;',
		'account_balance': '&#xebc4;',
		'account_balance_wallet': '&#xebc5;',
		'account_box': '&#xebc6;',
		'account_circle': '&#xebc7;',
		'add_shopping_cart': '&#xebc8;',
		'alarm_off': '&#xebc9;',
		'alarm_on': '&#xebca;',
		'android': '&#xebcb;',
		'announcement': '&#xebcc;',
		'aspect_ratio': '&#xebcd;',
		'assignment': '&#xebce;',
		'assignment_ind': '&#xebcf;',
		'assignment_late': '&#xebd0;',
		'assignment_return': '&#xebd1;',
		'assignment_returned': '&#xebd2;',
		'assignment_turned_in': '&#xebd3;',
		'autorenew': '&#xebd4;',
		'bookclass': '&#xebd5;',
		'bookmarkturned_in': '&#xebd6;',
		'bookmark_outlineturned_in_not': '&#xebd7;',
		'bug_report': '&#xebd8;',
		'build': '&#xebd9;',
		'cached': '&#xebda;',
		'change_history': '&#xebdb;',
		'check_circle': '&#xebdc;',
		'chrome_reader_mode': '&#xebdd;',
		'code': '&#xebde;',
		'credit_cardpayment': '&#xebdf;',
		'dashboard': '&#xebe0;',
		'delete': '&#xebe1;',
		'description': '&#xebe2;',
		'dns': '&#xebe3;',
		'done': '&#xebe4;',
		'done_all': '&#xebe5;',
		'exit_to_app': '&#xebe6;',
		'explore': '&#xebe7;',
		'extension': '&#xebe8;',
		'face': '&#xebe9;',
		'favorite': '&#xebea;',
		'favorite_outline': '&#xebeb;',
		'find_in_page': '&#xebec;',
		'find_replace': '&#xebed;',
		'flip_to_back': '&#xebee;',
		'flip_to_front': '&#xebef;',
		'group_work': '&#xebf0;',
		'help': '&#xebf1;',
		'highlight_remove': '&#xebf2;',
		'historyrestore': '&#xebf3;',
		'home': '&#xebf4;',
		'hourglass_empty': '&#xebf5;',
		'hourglass_full': '&#xebf6;',
		'httpslock': '&#xebf7;',
		'info': '&#xebf8;',
		'info_outline': '&#xebf9;',
		'input': '&#xebfa;',
		'invert_colors_on': '&#xebfb;',
		'label': '&#xebfc;',
		'label_outline': '&#xebfd;',
		'language': '&#xebfe;',
		'launchopen_in_new': '&#xebff;',
		'list': '&#xec00;',
		'lock_open': '&#xec01;',
		'lock_outline': '&#xec02;',
		'loyalty': '&#xec03;',
		'markunread_mailbox': '&#xec04;',
		'note_add': '&#xec05;',
		'open_in_browser': '&#xec06;',
		'open_with': '&#xec07;',
		'pageview': '&#xec08;',
		'perm_camera_mic': '&#xec09;',
		'perm_contact_calendar': '&#xec0a;',
		'perm_data_setting': '&#xec0b;',
		'perm_device_information': '&#xec0c;',
		'perm_media': '&#xec0d;',
		'perm_phone_msg': '&#xec0e;',
		'perm_scan_wifi': '&#xec0f;',
		'picture_in_picture': '&#xec10;',
		'polymer': '&#xec11;',
		'power_settings_new': '&#xec12;',
		'receipt': '&#xec13;',
		'redeemcard_giftcard': '&#xec14;',
		'search': '&#xec15;',
		'settings': '&#xec16;',
		'settings_applications': '&#xec17;',
		'settings_backup_restore': '&#xec18;',
		'settings_bluetooth': '&#xec19;',
		'settings_cell': '&#xec1a;',
		'settings_brightness': '&#xec1b;',
		'settings_ethernet': '&#xec1c;',
		'settings_input_antenna': '&#xec1d;',
		'settings_input_componentsettings_input_composite': '&#xec1e;',
		'settings_input_hdmi': '&#xec1f;',
		'settings_input_svideo': '&#xec20;',
		'settings_overscan': '&#xec21;',
		'settings_phone': '&#xec22;',
		'settings_power': '&#xec23;',
		'settings_remote': '&#xec24;',
		'settings_voice': '&#xec25;',
		'shop': '&#xec26;',
		'shop_two': '&#xec27;',
		'shopping_basket': '&#xec28;',
		'speaker_notes': '&#xec29;',
		'spellcheck': '&#xec2a;',
		'stars': '&#xec2b;',
		'subject': '&#xec2c;',
		'supervisor_account': '&#xec2d;',
		'swap_horiz': '&#xec2e;',
		'swap_vert': '&#xec2f;',
		'swap_vertical_circle': '&#xec30;',
		'system_update_alt': '&#xec31;',
		'tab': '&#xec32;',
		'tab_unselected': '&#xec33;',
		'thumb_down': '&#xec34;',
		'thumb_up': '&#xec35;',
		'thumbs_up_down': '&#xec36;',
		'toc': '&#xec37;',
		'today': '&#xec38;',
		'toll': '&#xec39;',
		'track_changes': '&#xec3a;',
		'translate': '&#xec3b;',
		'trending_down': '&#xec3c;',
		'trending_neutral': '&#xec3d;',
		'trending_up': '&#xec3e;',
		'verified_user': '&#xec3f;',
		'view_agenda': '&#xec40;',
		'view_array': '&#xec41;',
		'view_carousel': '&#xec42;',
		'view_column': '&#xec43;',
		'view_day': '&#xec44;',
		'view_headline': '&#xec45;',
		'view_list': '&#xec46;',
		'view_module': '&#xec47;',
		'view_quilt': '&#xec48;',
		'view_stream': '&#xec49;',
		'view_week': '&#xec4a;',
		'visibility_off': '&#xec4b;',
		'card_membership': '&#xec4c;',
		'card_travel': '&#xec4d;',
		'work': '&#xec4e;',
		'youtube_searched_for': '&#xec4f;',
		'eject': '&#xec50;',
		'camera_enhance': '&#xec51;',
		'help_outline': '&#xec52;',
		'reorder': '&#xec53;',
		'zoom_in': '&#xec54;',
		'zoom_out': '&#xec55;',
		'http': '&#xec56;',
		'event_seat': '&#xec57;',
		'flight_land': '&#xec58;',
		'flight_takeoff': '&#xec59;',
		'play_for_work': '&#xec5a;',
		'gif': '&#xec5b;',
		'indeterminate_check_box': '&#xec5c;',
		'offline_pin': '&#xec5d;',
		'all_out': '&#xec5e;',
		'copyright': '&#xec5f;',
		'fingerprint': '&#xec60;',
		'gavel': '&#xec61;',
		'lightbulb_outline': '&#xec62;',
		'picture_in_picture_alt': '&#xec63;',
		'important_devices': '&#xec64;',
		'touch_app': '&#xec65;',
		'accessible': '&#xec66;',
		'compare_arrows': '&#xec67;',
		'date_range': '&#xec68;',
		'donut_large': '&#xec69;',
		'donut_small': '&#xec6a;',
		'line_style': '&#xec6b;',
		'line_weight': '&#xec6c;',
		'motorcycle': '&#xec6d;',
		'opacity': '&#xec6e;',
		'pets': '&#xec6f;',
		'pregnant_woman': '&#xec70;',
		'record_voice_over': '&#xec71;',
		'rounded_corner': '&#xec72;',
		'rowing': '&#xec73;',
		'timeline': '&#xec74;',
		'update': '&#xec75;',
		'watch_later': '&#xec76;',
		'pan_tool': '&#xec77;',
		'euro_symbol': '&#xec78;',
		'g_translate': '&#xec79;',
		'remove_shopping_cart': '&#xec7a;',
		'restore_page': '&#xec7b;',
		'speaker_notes_off': '&#xec7c;',
		'delete_forever': '&#xec7d;',
		'accessibility_new': '&#xec7e;',
		'check_circle_outline': '&#xec7f;',
		'delete_outline': '&#xec80;',
		'done_outline': '&#xec81;',
		'maximize': '&#xec82;',
		'minimize': '&#xec83;',
		'offline_bolt': '&#xec84;',
		'swap_horizontal_circle': '&#xec85;',
		'accessible_forward': '&#xec86;',
		'calendar_today': '&#xec87;',
		'calendar_view_day': '&#xec88;',
		'label_important': '&#xec89;',
		'restore_from_trash': '&#xec8a;',
		'supervised_user_circle': '&#xec8b;',
		'text_rotate_up': '&#xec8c;',
		'text_rotate_vertical': '&#xec8d;',
		'text_rotation_angledown': '&#xec8e;',
		'text_rotation_angleup': '&#xec8f;',
		'text_rotation_down': '&#xec90;',
		'text_rotation_none': '&#xec91;',
		'commute': '&#xec92;',
		'arrow_right_alt': '&#xec93;',
		'work_off': '&#xec94;',
		'work_outline': '&#xec95;',
		'drag_indicator': '&#xec96;',
		'horizontal_split': '&#xec97;',
		'label_important_outline': '&#xec98;',
		'vertical_split': '&#xec99;',
		'voice_over_off': '&#xec9a;',
		'segment': '&#xec9b;',
		'contact_support': '&#xec9c;',
		'compress': '&#xec9d;',
		'filter_list_alt': '&#xec9e;',
		'expand': '&#xec9f;',
		'edit_off': '&#xeca0;',
		'10k': '&#xeca1;',
		'10mp': '&#xeca2;',
		'11mp': '&#xeca3;',
		'12mp': '&#xeca4;',
		'13mp': '&#xeca5;',
		'14mp': '&#xeca6;',
		'15mp': '&#xeca7;',
		'16mp': '&#xeca8;',
		'17mp': '&#xeca9;',
		'18mp': '&#xecaa;',
		'19mp': '&#xecab;',
		'1k': '&#xecac;',
		'1k_plus': '&#xecad;',
		'20mp': '&#xecae;',
		'21mp': '&#xecaf;',
		'22mp': '&#xecb0;',
		'23mp': '&#xecb1;',
		'24mp': '&#xecb2;',
		'2k': '&#xecb3;',
		'2k_plus': '&#xecb4;',
		'2mp': '&#xecb5;',
		'3k': '&#xecb6;',
		'3k_plus': '&#xecb7;',
		'3mp': '&#xecb8;',
		'4k_plus': '&#xecb9;',
		'4mp': '&#xecba;',
		'5k': '&#xecbb;',
		'5k_plus': '&#xecbc;',
		'5mp': '&#xecbd;',
		'6k': '&#xecbe;',
		'6k_plus': '&#xecbf;',
		'6mp': '&#xecc0;',
		'7k': '&#xecc1;',
		'7k_plus': '&#xecc2;',
		'7mp': '&#xecc3;',
		'8k': '&#xecc4;',
		'8k_plus': '&#xecc5;',
		'8mp': '&#xecc6;',
		'9k': '&#xecc7;',
		'9k_plus': '&#xecc8;',
		'9mp': '&#xecc9;',
		'account_tree': '&#xecca;',
		'add_chart': '&#xeccb;',
		'add_ic_call': '&#xeccc;',
		'add_moderator': '&#xeccd;',
		'all_inbox': '&#xecce;',
		'approval': '&#xeccf;',
		'assistant_direction': '&#xecd0;',
		'assistant_navigation': '&#xecd1;',
		'bookmarks': '&#xecd2;',
		'bus_alert': '&#xecd3;',
		'cases': '&#xecd4;',
		'circle_notifications': '&#xecd5;',
		'closed_caption_off': '&#xecd6;',
		'connected_tv': '&#xecd7;',
		'dangerous': '&#xecd8;',
		'dashboard_customize': '&#xecd9;',
		'desktop_access_disabled': '&#xecda;',
		'drive_file_move_outline': '&#xecdb;',
		'drive_file_rename_outline': '&#xecdc;',
		'drive_folder_upload': '&#xecdd;',
		'duo': '&#xecde;',
		'explore_off': '&#xecdf;',
		'file_download_done': '&#xece0;',
		'rtt': '&#xece1;',
		'grid_view': '&#xece2;',
		'hail': '&#xece3;',
		'home_filled': '&#xece4;',
		'imagesearch_roller': '&#xece5;',
		'label_off': '&#xece6;',
		'library_add_check': '&#xece7;',
		'logout': '&#xece8;',
		'margin': '&#xece9;',
		'mark_as_unread': '&#xecea;',
		'menu_open': '&#xeceb;',
		'mp': '&#xecec;',
		'offline_share': '&#xeced;',
		'padding': '&#xecee;',
		'panorama_photosphere': '&#xecef;',
		'panorama_photosphere_select': '&#xecf0;',
		'person_add_disabled': '&#xecf1;',
		'phone_disabled': '&#xecf2;',
		'phone_enabled': '&#xecf3;',
		'pivot_table_chart': '&#xecf4;',
		'print_disabled': '&#xecf5;',
		'railway_alert': '&#xecf6;',
		'recommend': '&#xecf7;',
		'remove_done': '&#xecf8;',
		'remove_moderator': '&#xecf9;',
		'repeat_on': '&#xecfa;',
		'repeat_one_on': '&#xecfb;',
		'replay_circle_filled': '&#xecfc;',
		'reset_tv': '&#xecfd;',
		'sd': '&#xecfe;',
		'shield': '&#xecff;',
		'shuffle_on': '&#xed00;',
		'speed': '&#xed01;',
		'stacked_bar_chart': '&#xed02;',
		'stream': '&#xed03;',
		'swipe': '&#xed04;',
		'switch_account': '&#xed05;',
		'tag': '&#xed06;',
		'thumb_down_off_alt': '&#xed07;',
		'thumb_up_off_alt': '&#xed08;',
		'toggle_off': '&#xed09;',
		'toggle_on': '&#xed0a;',
		'two_wheeler': '&#xed0b;',
		'upload_file': '&#xed0c;',
		'view_in_ar': '&#xed0d;',
		'waterfall_chart': '&#xed0e;',
		'wb_shade': '&#xed0f;',
		'wb_twighlight': '&#xed10;',
		'home_work': '&#xed11;',
		'schedule_send': '&#xed12;',
		'bolt': '&#xed13;',
		'send_and_archive': '&#xed14;',
		'workspaces_filled': '&#xed15;',
		'file_present': '&#xed16;',
		'workspaces_outline': '&#xed17;',
		'fit_screen': '&#xed18;',
		'saved_search': '&#xed19;',
		'storefront': '&#xed1a;',
		'amp_stories': '&#xed1b;',
		'dynamic_feed': '&#xed1c;',
		'euro': '&#xed1d;',
		'height': '&#xed1e;',
		'policy': '&#xed1f;',
		'sync_alt': '&#xed20;',
		'menu_book': '&#xed21;',
		'emoji_flags': '&#xed22;',
		'emoji_food_beverage': '&#xed23;',
		'emoji_nature': '&#xed24;',
		'emoji_people': '&#xed25;',
		'emoji_symbols': '&#xed26;',
		'emoji_transportation': '&#xed27;',
		'post_add': '&#xed28;',
		'people_alt': '&#xed29;',
		'emoji_emotions': '&#xed2a;',
		'emoji_events': '&#xed2b;',
		'emoji_objects': '&#xed2c;',
		'sports_basketball': '&#xed2d;',
		'sports_cricket': '&#xed2e;',
		'sports_esports': '&#xed2f;',
		'sports_football': '&#xed30;',
		'sports_golf': '&#xed31;',
		'sports_hockey': '&#xed32;',
		'sports_mma': '&#xed33;',
		'sports_motorsports': '&#xed34;',
		'sports_rugby': '&#xed35;',
		'sports_soccer': '&#xed36;',
		'sports': '&#xed37;',
		'sports_volleyball': '&#xed38;',
		'sports_tennis': '&#xed39;',
		'sports_handball': '&#xed3a;',
		'sports_kabaddi': '&#xed3b;',
		'eco': '&#xed3c;',
		'museum': '&#xed3d;',
		'flip_camera_android': '&#xed3e;',
		'flip_camera_ios': '&#xed3f;',
		'cancel_schedule_send': '&#xed40;',
		'apartment': '&#xed41;',
		'bathtub': '&#xed42;',
		'deck': '&#xed43;',
		'fireplace': '&#xed44;',
		'house': '&#xed45;',
		'king_bed': '&#xed46;',
		'nights_stay': '&#xed47;',
		'outdoor_grill': '&#xed48;',
		'single_bed': '&#xed49;',
		'square_foot': '&#xed4a;',
		'double_arrow': '&#xed4b;',
		'sports_baseball': '&#xed4c;',
		'attractions': '&#xed4d;',
		'bakery_dining': '&#xed4e;',
		'breakfast_dining': '&#xed4f;',
		'car_rental': '&#xed50;',
		'car_repair': '&#xed51;',
		'dinner_dining': '&#xed52;',
		'dry_cleaning': '&#xed53;',
		'hardware': '&#xed54;',
		'liquor': '&#xed55;',
		'lunch_dining': '&#xed56;',
		'nightlife': '&#xed57;',
		'park': '&#xed58;',
		'ramen_dining': '&#xed59;',
		'celebration': '&#xed5a;',
		'theater_comedy': '&#xed5b;',
		'badge': '&#xed5c;',
		'festival': '&#xed5d;',
		'icecream': '&#xed5e;',
		'volunteer_activism': '&#xed5f;',
		'contactless': '&#xed60;',
		'delivery_dining': '&#xed61;',
		'brunch_dining': '&#xed62;',
		'takeout_dining': '&#xed63;',
		'ac_unit': '&#xed64;',
		'airport_shuttle': '&#xed65;',
		'all_inclusive': '&#xed66;',
		'beach_access': '&#xed67;',
		'business_center': '&#xed68;',
		'casino': '&#xed69;',
		'child_care': '&#xed6a;',
		'child_friendly': '&#xed6b;',
		'fitness_center': '&#xed6c;',
		'golf_course': '&#xed6d;',
		'hot_tub': '&#xed6e;',
		'kitchen': '&#xed6f;',
		'pool': '&#xed70;',
		'room_service': '&#xed71;',
		'smoke_free': '&#xed72;',
		'smoking_rooms': '&#xed73;',
		'spa': '&#xed74;',
		'no_meeting_room': '&#xed75;',
		'meeting_room': '&#xed76;',
		'goat': '&#xed77;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
