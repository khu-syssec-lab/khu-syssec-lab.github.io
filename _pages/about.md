---
layout: about
title: Home
permalink: /
# subtitle: <a href='#'>Affiliations</a>. Address. Contacts. Motto. Etc.

profile:
  align: right
  # image: cs-building.jpg
  image: campus-square.jpg
  image_circular: false # crops the image to make it circular
  more_info: Main campus (Philosopher's Square)

news: true # includes a list of news items
selected_papers: false # includes a list of papers marked as "selected={true}"
social: false # includes social icons at the bottom of the page
---

> **경희대학교 컴퓨터공학부** 및 **융합보안대학원**의 **시스템 보안 연구실**에 오신 것을 환영합니다! 

저희 연구실에서는 이동통신 네트워크 및 무선 통신 시스템에서 발생하는 보안 문제를 연구하고 있습니다.
특히, 무선 신호/프로토콜을 이용해 스마트폰, 무선 기기, 위성 등의 시스템에서 취약점을 탐지하는 보안 테스팅, 무선 신호 수집·분석을 통한 보안 문제 탐지, 그리고 무선 프로토콜 및 신호 기반 공격·방어 기술 연구를 수행하고 있습니다.
그 외에도 물리 보안, 센서 보안, AI를 이용한 무선 통신에서의 보안 문제 탐지 등의 분야에도 관심을 갖고 있습니다.

보안, 이동통신 및 무선통신, 컴퓨터공학 또는 전자공학 배경을 가진 학생을 환영하며, 새로운 보안 문제에 도전할 열정 있는 대학원생 및 학부 연구생을 찾고 있습니다.
연구실 지원과 혜택/환경에 대한 자세한 내용은 [Contact 페이지]({{ '/contact' | relative_url }})를 참고해주세요. 

Welcome to the **System Security Lab** (KHU-SysSec)! 
We are part of [School of Computing](https://ce.khu.ac.kr/) and [Graduate School of Security Convergence](https://csec.khu.ac.kr) at [Kyung Hee University](https://www.khu.ac.kr/).
Our mission is to explore the real-world security issues in **4G/5G cellular networks** and **wireless communication** across various innovative systems such as smartphones, unmanned vehicles, and satellites. 

We are seeking **self-motivated** and **passionate** graduate & under-graduate students with keen interest in wireless security.
If you are interested, [contact us](mailto:cheoljunp@khu.ac.kr) or see the details of [join our lab]({{ '/contact' | relative_url }}).


<!-- 🔶 연구실 모집 공고 배너 시작 -->
<div class="announcement-banner" style="background-color: #f1c40f; padding: 15px 0; text-align: center; font-size: 1.1em; font-weight: bold; color: black;">
  🚀 <strong>2026년 가을/2027년 봄학기 석사과정 신입생 및 2026년 학부 연구생 모집 중! </strong>&nbsp;
  <a href="{{ '/contact' | relative_url }}" style="color: black; text-decoration: underline;">지원 안내 보기 →</a>
</div>
<!-- 🔶 연구실 모집 공고 배너 끝 -->

{% assign current_members = site.members | where: "team_frontpage", true | where_exp: "m", "m.group != 'Alumni'" | sort: "group_rank" %}

<section class="home-people-section">
  <div class="home-section-head">
    <h2>People</h2>
  </div>

<div class="d-flex flex-wrap align-content-stretch justify-content-start m-n2 pt-2 no-gutters home-people-grid">
  {% for member in current_members %}
    <div class="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
      <a href="{{ member.url | relative_url }}" class="no-decoration">
        <div class="card hoverable h-100 m-2 home-member-card">
          <img src="{{ '/assets/img/' | append: member.profile.image | relative_url }}" class="card-img-top" alt="{{ member.profile.name }}" />
          <div class="card-body p-2">
            <div class="card-title m-0 home-member-name">{{ member.title }}</div>
          </div>
        </div>
      </a>
    </div>
  {% endfor %}
</div>
</section>

{% if site.features.gallery %}
## Recent Lab Activities

{% include gallery.liquid limit=6 show_description=false %}

<div class="mt-3">
  <a href="{{ '/gallery/' | relative_url }}" class="btn btn-sm btn-outline-primary">View Full Gallery</a>
</div>
{% endif %}
