import * as React from "react";
import Bosluk from './Bosluk'

const ToplulugaKatil = () => (
	<div>
		<Bosluk />

		<div
			style={{
				height: 300,
				width: '100%',
				background: "#F4F4F4"
			}}
		>
			<h1 style={{ paddingTop: '2rem' }} className="header-text textAlignCenter">Topluluğa Katıl</h1>

			<p style={{ marginTop: '2rem' }} className="textAlignCenter">
				Sen de Discord sunucumuza katılarak, etkinliklerden yarışmalardan haberdar
				olabilir ve yüzlerce kullanıcıyla süregelen etkinliklere katılma şansı
			yakalayabilirsin.{" "}
			</p>
			<div style={{ display: 'grid', placeItems: 'center' }}>
				<a
					className="nav-link"
					style={{ width: 'max-content', color: '#7289da' }}
					href="https://discord.gg/fBGEkpGrB5"
				>
					<img alt="" src="https://seeklogo.com/images/D/discord-logo-134E148657-seeklogo.com.png" style={{ width: 50 }} /> Hemen Katıl
			</a>
			</div>
		</div>
	</div>
);

export default ToplulugaKatil;
